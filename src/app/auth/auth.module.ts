import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthConfig, OAuthModule } from 'angular-oauth2-oidc';
import { SigninComponent } from 'src/app/auth/signin/signin.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { authConfig, OAuthModuleConfig } from './auth.config';
import { initAuth } from './auth.init';
import { AuthService } from './auth.service';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    providers: [
        OAuthModuleConfig,
        { provide: AuthConfig, useValue: authConfig },
        { provide: APP_INITIALIZER, useFactory: initAuth, deps: [AuthService], multi: true}
    ],
    imports: [
        AuthRoutingModule,
        OAuthModule.forRoot(),
        SharedModule
    ]
})

export class AuthModule {
 }