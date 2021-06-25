import { NgModule } from '@angular/core';
import { SigninComponent } from 'src/app/auth/signin/signin.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ]
})

export class AuthModule { }