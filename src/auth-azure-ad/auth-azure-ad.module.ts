import { Module } from '@nestjs/common';
import { AuthAzureAdService } from './auth-azure-ad.service';
import { AuthAzureAdController } from './auth-azure-ad.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    providers: [AuthAzureAdService],
    controllers: [AuthAzureAdController],
})
export class AuthAzureAdModule {}
