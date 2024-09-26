import { Injectable } from '@nestjs/common';
import { ConfidentialClientApplication } from '@azure/msal-node';
import { SocialInterface } from '../social/interfaces/social.interface';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthAzureAdService {
    private msalClient: ConfidentialClientApplication;

    constructor(private readonly authService: AuthService) {
        this.msalClient = new ConfidentialClientApplication({
            auth: {
                clientId: String(process.env.AZURE_AD_CLIENT_ID),
                authority: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}`,
                clientSecret: String(process.env.AZURE_AD_CLIENT_SECRET),
            },
        });
    }

    async getAuthUrl(): Promise<string> {
        const authCodeUrlParameters = {
            scopes: [
                'openid',
                'profile',
                'email',
                'offline_access',
                'User.Read',
            ],
            redirectUri: String(process.env.AZURE_AD_REDIRECT_URI),
            grantType: 'authorization_code',
        };
        return this.msalClient.getAuthCodeUrl(authCodeUrlParameters);
    }

    async getToken(authCode: string): Promise<any> {
        const tokenRequest = {
            code: authCode,
            scopes: [
                'openid',
                'profile',
                'email',
                'offline_access',
                'User.Read',
            ],
            redirectUri: String(process.env.AZURE_AD_REDIRECT_URI),
            grantType: 'authorization_code',
        };
        return this.msalClient.acquireTokenByCode(tokenRequest);
    }

    async validateSocialLogin(socialData: SocialInterface) {
        return await this.authService.validateSocialLogin(
            'azure-ad',
            socialData,
        );
    }
}
