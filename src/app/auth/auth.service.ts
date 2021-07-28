import { Injectable } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _accessToken: any;
  private _idToken: any;
  private _claims: any;
  
  get accessToken() { return this._accessToken; }
  get idToken() { return this._idToken; }
  get claims() { return this._claims; }

  constructor(
    private readonly oauthService: OAuthService,
    private readonly authConfig: AuthConfig
  ) { }

  async initAuth(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.oauthService.configure(this.authConfig);
      this.oauthService.setStorage(localStorage);
      this.oauthService.tokenValidationHandler = new NullValidationHandler();
      
      this.oauthService.events
          .pipe(filter((e: any) => {
            return e.type === 'token_received';
          }))
        .subscribe(() => handleAuthToken());
      
      this.oauthService.loadDiscoveryDocumentAndLogin().then(isLoggedIn => {
        if (isLoggedIn) {
          this.oauthService.setupAutomaticSilentRefresh();
          resolve("Megam Client - Authentication Succeded");
        } else {
          this.oauthService.initImplicitFlow();
          reject("Megam Client - Authentication Failed");
        }
      });
      
      let handleAuthToken = () => {
        this.oauthService.loadUserProfile();
        this._claims = this.oauthService.getIdentityClaims();
        this._accessToken = this.oauthService.getAccessToken();
        this._idToken = this.oauthService.getIdToken();
      }
    })
  };

  
}


