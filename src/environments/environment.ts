/* eslint-disable @typescript-eslint/naming-convention */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

    production: false,
    url:'',
    recaptcha:{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        website_key:'6Ldgq8McAAAAAI1FzvirdBXeC34Gx96K59uaBqJT',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        secre_key:'6Ldgq8McAAAAAH5zmgDMOJIvd5HrMZ0B4Qnw5sOD'
    },
    backend: {
        Proveedor: '',
        usuarios: '',
        Admin: '',
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
