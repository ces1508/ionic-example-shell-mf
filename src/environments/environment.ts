// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // avaluosMf: 'https://avaluos-mf.000webhostapp.com/remoteEntry.js',
  avaluosMf: 'http://localhost:4003/remoteEntry.js',
  avaluosMfToken:
    // eslint-disable-next-line max-len
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbk5hbWUiOiJob21lX2FwcCIsImFwcGxpY2F0aW9uSUQiOiJob21lc2IifQ.Mxuiy-GEl_97WCzBGZGzQ0llYQXF1i0IxPx4PORrirQ',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
