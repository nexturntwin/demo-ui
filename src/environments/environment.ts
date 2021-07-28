// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  orgName: 'MEGAM',
  appName: 'MegamOps',
  envName: 'DEV',
  api: {
    mts: {
      endpoint: 'http://localhost:8002/mts/',
      urls: {
        contact: 'api/v1/contact/'
      }
    },
    firebase: {
      endpoint: 'https://app-shopping-51b37.firebaseio.com/'
    },
    auth: {
      keycloak: {
        issuer: 'http://localhost:8300/auth/realms/MEGAM',
        redirectUri: 'http://localhost:4200/',
        clientId: 'megam-cli',
        responseType: 'code',
        scope: 'openid profile email',
        requireHttps: false,
        showDebugInformation: true,
        disableAtHashCheck: true
      }
    }
  }
};