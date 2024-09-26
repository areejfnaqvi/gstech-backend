import { Module } from '@nestjs/common';
import { UsersModule } from './entities/users/users.module';
import { FilesModule } from './entities/files/files.module';
import { AuthModule } from './auth/auth.module';
import databaseConfig from './database/config/database.config';
import authConfig from './auth/config/auth.config';
import appConfig from './config/app.config';
import mailConfig from './mail/config/mail.config';
import fileConfig from './entities/files/config/file.config';
import googleConfig from './auth-google/config/google.config';
import path from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGoogleModule } from './auth-google/auth-google.module';
import { I18nModule } from 'nestjs-i18n/dist/i18n.module';
import { HeaderResolver } from 'nestjs-i18n';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { MailModule } from './mail/mail.module';
import { HomeModule } from './home/home.module';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AllConfigType } from './config/config.type';
import { SessionModule } from './entities/session/session.module';
import { MailerModule } from './mailer/mailer.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './database/mongoose-config.service';
import { DatabaseConfig } from './database/config/database-config.type';
import { CareQuestionsModule } from './entities/care-questions/care-questions.module';
import { HealthModule } from './health/health.module';
import { AuthAzureAdModule } from './auth-azure-ad/auth-azure-ad.module';
import { CareFormDataModule } from './entities/care-form-data/care-form-data.module';
import { CareQuestionOptionsModule } from './entities/care-question-options/care-question-options.module';

// <database-block>
const infrastructureDatabaseModule = (databaseConfig() as DatabaseConfig)
    .isDocumentDatabase
    ? MongooseModule.forRootAsync({
          useClass: MongooseConfigService,
      })
    : TypeOrmModule.forRootAsync({
          useClass: TypeOrmConfigService,
          dataSourceFactory: async (options: DataSourceOptions) => {
              return new DataSource(options).initialize();
          },
      });
// </database-block>

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [
                databaseConfig,
                authConfig,
                appConfig,
                mailConfig,
                fileConfig,
                googleConfig,
            ],
            envFilePath: ['.env'],
        }),
        infrastructureDatabaseModule,
        I18nModule.forRootAsync({
            useFactory: (configService: ConfigService<AllConfigType>) => ({
                fallbackLanguage: configService.getOrThrow(
                    'app.fallbackLanguage',
                    {
                        infer: true,
                    },
                ),
                loaderOptions: {
                    path: path.join(__dirname, '/i18n/'),
                    watch: true,
                },
            }),
            resolvers: [
                {
                    use: HeaderResolver,
                    useFactory: (
                        configService: ConfigService<AllConfigType>,
                    ) => {
                        return [
                            configService.get('app.headerLanguage', {
                                infer: true,
                            }),
                        ];
                    },
                    inject: [ConfigService],
                },
            ],
            imports: [ConfigModule],
            inject: [ConfigService],
        }),
        UsersModule,
        FilesModule,
        AuthModule,
        AuthGoogleModule,
        AuthAzureAdModule,
        SessionModule,
        MailModule,
        MailerModule,
        HomeModule,
        HealthModule,
        CareFormDataModule,
        CareQuestionsModule,
        CareQuestionOptionsModule,
    ],
})
export class AppModule {}
