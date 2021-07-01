import { NgModule } from '@angular/core';
import { SigninComponent } from 'src/app/auth/signin/signin.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        AuthRoutingModule,
        MaterialModule
    ]
})

export class AuthModule { }