import {
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Req,
	Res,
} from '@nestjs/common';
import { AuthAzureAdService } from './auth-azure-ad.service';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

@ApiTags('Auth')
@Controller({
	path: 'auth/azure-ad',
	version: '1',
})
export class AuthAzureAdController {
	constructor(private readonly authAzureAdService: AuthAzureAdService) { }

	@Get('login')
	@HttpCode(HttpStatus.OK)
	async login(@Res() res: Response) {
		const authUrl = await this.authAzureAdService.getAuthUrl();
		return res.redirect(authUrl);
	}

	@Get('callback')
	@HttpCode(HttpStatus.OK)
	async callback(@Req() req: Request, @Res() res: Response) {
		try {
			const authorizationCode = req.query.code;

			if (!authorizationCode) {
				return res
					.status(HttpStatus.BAD_REQUEST)
					.send('Authorization code not found');
			}

			const tokenResponse = await this.authAzureAdService.getToken(
				authorizationCode as string,
			);
			const nameParts = tokenResponse.idTokenClaims.name
				.trim()
				.split(' ');
			const lastName = nameParts.pop();
			const firstName = nameParts.join(' ').trim();
			const socialData = {
				id: tokenResponse.idTokenClaims.oid,
				email: tokenResponse.idTokenClaims.email,
				firstName,
				lastName,
			};

			const user =
				await this.authAzureAdService.validateSocialLogin(socialData);

			const redirectUrl = `${process.env.FRONTEND_DOMAIN}/auth/callback?token=${user.token}&refreshToken=${user.refreshToken}&user=${encodeURIComponent(JSON.stringify(user.user))}`;

			return res.redirect(redirectUrl);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
				message: 'Authentication failed',
				error: error.message,
			});
		}
	}
}
