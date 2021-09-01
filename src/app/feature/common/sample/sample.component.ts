import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor(private authService: AuthService) {
    authService.initAuth();
   }

  ngOnInit(): void {
    console.log(environment.orgName);
    console.log(environment.api.auth.keycloak.issuer);
  }

}
