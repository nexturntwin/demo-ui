export const environment = {
  production: false,
  orgName: 'NEXTURN',
  appName: 'DEMO',
  envName: 'PROD',
  api: {
    mts: {
      endpoint: 'http://localhost:8002/mts/',
      urls: {
        contact: 'api/v1/contact/'
      }
    },
    nxt: {
      endpoint: 'http://localhost:8080/nxt/',
      urls: {
        facedetector: 'api/v1/facedetector/',
      }
    },
    firebase: {
      endpoint: 'https://app-shopping-51b37.firebaseio.com/'
    }
  }
};