// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  orgName: 'NEXTURN',
  appName: 'DEMO',
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
    }
  },
  endpoint: {
    mts: 'http://localhost:8002/mts/',
    firebase: 'https://app-shopping-51b37.firebaseio.com/',
  },
  urls: {
    mts: {
      contact: {
        getUrl: 'api/v1/contact/',
        postUrl: 'api/v1/contact',
        putUrl: 'api/v1/contact/',
        deleteUrl: 'api/v1/contact/'
      }
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
