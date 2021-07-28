import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

export const authConfig: AuthConfig = {
    issuer: environment.api.auth.keycloak.issuer,
    redirectUri: environment.api.auth.keycloak.redirectUri,
    clientId: environment.api.auth.keycloak.clientId,
    scope: environment.api.auth.keycloak.scope,
    responseType: environment.api.auth.keycloak.responseType,
    showDebugInformation: environment.api.auth.keycloak.showDebugInformation,
    disableAtHashCheck: environment.api.auth.keycloak.disableAtHashCheck,
    requireHttps: environment.api.auth.keycloak.requireHttps,
    sessionCheckIntervall: 60000,
    sessionChecksEnabled: true,
    clearHashAfterLogin: false,
    silentRefreshTimeout: 5000
}

export class OAuthModuleConfig {
    resourceServer: OAuthResourceServerConfig = {sendAccessToken: false};
}

export class OAuthResourceServerConfig {
    allowedUrls?: Array<string>;
    sendAccessToken = true;
    customUrlValidation?: (url: string) => boolean;
}