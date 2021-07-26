export const environment = {
  production: true,
  orgName: 'MEGAM',
  appName: 'MegamOps',
  envName: 'PROD',
  endpoint: {
    mts: 'http://localhost:8002/mts/',
    firebase: 'https://app-shopping-51b37.firebaseio.com/',
  },
  api: {
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
