/* eslint-disable @typescript-eslint/naming-convention */
export const environment = {
    production: true,
    url:'localhost:11410/api/',
    recaptcha:{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        website_key:'6Ldgq8McAAAAAI1FzvirdBXeC34Gx96K59uaBqJT',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        secre_key:'6Ldgq8McAAAAAH5zmgDMOJIvd5HrMZ0B4Qnw5sOD'
    },
    backend: {
        Proveedor: 'http://localhost:11410/api',
        usuarios: 'http://localhost:11410/api',
        Admin: 'http://localhost:11410/api',
    }
};
