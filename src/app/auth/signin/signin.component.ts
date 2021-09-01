import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.createForm();
    //this.authService.logout();
  }

  private createForm() {
    this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        rememberMe: new FormControl('' !== null)
    });
  }

  login() {
    console.log(this.loginForm.value);
    console.log(this.authService.idToken);
  }
}
