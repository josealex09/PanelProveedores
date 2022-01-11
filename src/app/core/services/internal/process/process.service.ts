import { Consultas } from './../../../interfaces/registroproveedores/proceso';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProveedorProcesoSeleccion } from 'app/core/interfaces/registroproveedores/proceso';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
    apiUrl = environment.url;
    urlListProcess = '/Admin/SelProcesoSeleccionGeneral?nCodEstado';
    urlConstanteLogistica ='Proveedor/ListarConstanteLogistica?';
    urlListEspecificacionDocumentos='/Admin/ListarProcesoSeleccionEspecificacionesDocumentos?ProcesoSeleccionId';
    urlListEtapasDocumentos='/Admin/ListarProcesoSeleccionEtapasDocumentos?ProcesoSeleccionId';
    urlConstante = 'Proveedor/ListarConstante?';
    urlRegistraProveedorProcesoSeleccion ='/Admin/InsProcesoSeleccionProveedor';
    urlListProcesoSeleccionProveedor = '/Admin/ListarProcesoSeleccionProveedorDatosSubidosWeb?nProcesoSeleccionId';
    urlListConfigSubasta = 'Admin/SelConfiguracionSubasta?ProcesoSeleccionId';

    estados ='124';
    tipodoc = '12';
    tipoMoneda='1011';
    tiposubasta= '132';
  constructor(private http: HttpClient) { }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async listarProcesos(codEstado: number,ruc: string) {

    // eslint-disable-next-line max-len
    const newLocal = sessionStorage.getItem('token');
    //################################## DEFINIMOS LOS HEADERS-API REST ##############################
    const headers =  new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Origin': '*',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Authorization': newLocal
      });
      //################################ GOLPEAMOS LA API - GET ####################################
      return this.http.get<any>(`${this.apiUrl}${this.urlListProcess}=${codEstado}&NroRuc=${ruc}`, { headers }).toPromise()
      //################################## OBTENEMOS UNA RESPUESTA CORRECTA ##############################
      .then((res: any) => {
      console.log(res);
      return res;
      })
      //################################## OBTENEMOS UN ERROR ##############################
      .catch((error) => {
      console.log(error);
      return error;
      });
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async listarEstados() {

    const newLocal = sessionStorage.getItem('token');
    //################################## DEFINIMOS LOS HEADERS-API REST ##############################
      const headers =  new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Origin': '*',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Authorization': newLocal

      });
      //################################ GOLPEAMOS LA API - GET ####################################
      return this.http.get<any>(`${this.apiUrl}${this.urlConstanteLogistica}codigoconstante=${this.estados}`,{headers}).toPromise()
        //################################## OBTENEMOS UNA RESPUESTA CORRECTA ##############################
        .then((res: any) => {
          console.log(res);
          return res;
        })
        //################################## OBTENEMOS UN ERROR ##############################
        .catch((error) => {
          console.log(error);
          return error;
        });
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  listarEspecificacionesDocumentos(nCodigo: number){

    // eslint-disable-next-line max-len
    const newLocal = sessionStorage.getItem('token');
    //################################## DEFINIMOS LOS HEADERS-API REST ##############################
    const headers =  new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Origin': '*',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Authorization': newLocal
      });
      //################################ GOLPEAMOS LA API - GET ####################################
      return this.http.get<any>(`${this.apiUrl}${this.urlListEspecificacionDocumentos}=${nCodigo}`, { headers }).toPromise()
      //################################## OBTENEMOS UNA RESPUESTA CORRECTA ##############################
      .then((res: any) => {
      console.log(res);
      return res;
      })
      //################################## OBTENEMOS UN ERROR ##############################
      .catch((error) => {
      console.log(error);
      return error;
      });
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async listarEtapasDocumentos(nCodigo: number,nEtapa: number){

    // eslint-disable-next-line max-len
    const newLocal = sessionStorage.getItem('token');
    //################################## DEFINIMOS LOS HEADERS-API REST ##############################
    const headers =  new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Origin': '*',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Authorization': newLocal
      });
      //################################ GOLPEAMOS LA API - GET ####################################
      return this.http.get<any>(`${this.apiUrl}${this.urlListEtapasDocumentos}=${nCodigo}&CodEtapa=${nEtapa}`, { headers }).toPromise()
      //################################## OBTENEMOS UNA RESPUESTA CORRECTA ##############################
      .then((res: any) => {
      console.log(res);
      return res;
      })
      //################################## OBTENEMOS UN ERROR ##############################
      .catch((error) => {
      console.log(error);
      return error;
      });
  }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async listarTiposDocumentos() {

    const newLocal = sessionStorage.getItem('token');
    //################################## DEFINIMOS LOS HEADERS-API REST ##############################
      const headers =  new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Origin': '*',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Authorization': newLocal

      });
      //################################ GOLPEAMOS LA API - GET ####################################
      return this.http.get<any>(`${this.apiUrl}${this.urlConstanteLogistica}codigoconstante=${this.tipodoc}`,{headers}).toPromise()
        //################################## OBTENEMOS UNA RESPUESTA CORRECTA ##############################
        .then((res: any) => {
          console.log(res);
          return res;
        })
        //################################## OBTENEMOS UN ERROR ##############################
        .catch((error) => {
          console.log(error);
          return error;
        });
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async listarMoneda() {

    const newLocal = sessionStorage.getItem('token');
    //################################## DEFINIMOS LOS HEADERS-API REST ##############################
      const headers =  new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Origin': '*',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Authorization': newLocal

      });
      //################################ GOLPEAMOS LA API - GET ####################################
      return this.http.get<any>(`${this.apiUrl}${this.urlConstante}codigoconstante=${this.tipoMoneda}&valor=-1`,{headers}).toPromise()
        //################################## OBTENEMOS UNA RESPUESTA CORRECTA ##############################
        .then((res: any) => {
          console.log(res);
          return res;
        })
        //################################## OBTENEMOS UN ERROR ##############################
        .catch((error) => {
          console.log(error);
          return error;
        });
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async  registrarProcesoSeleccionProveedor(data: ProveedorProcesoSeleccion){

    const newLocal = sessionStorage.getItem('token');
    //################################## DEFINIMOS LOS HEADERS-API REST ##############################
    const headers =  new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Access-Control-Allow-Origin': '*',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Authorization': newLocal
    });
    //################################ GOLPEAMOS LA API - GET ####################################
    return this.http.post<any>(`${this.apiUrl}${this.urlRegistraProveedorProcesoSeleccion}`,{
    nProcesoSeleccionId: data.nProcesoSeleccionId,
    cNroRuc: data.cNroRuc,
    nCodEtapa: data.nCodEtapa,
    nCodMoneda:data.nCodMoneda,
    cApelacion:data.cApelacion,
    nMontoPropuesto:data.nMontoPropuesto,
    cObservacion:data.cObservacion,
    cRespuesta: data.cRespuesta,
    documentos:data.documentos,
    consultas: data.consultas
      },{headers}).toPromise()
      //################################## OBTENEMOS UNA RESPUESTA CORRECTA ##############################
      .then((res: any) => {
        console.log(res);
        return res;
      })
      //################################## OBTENEMOS UN ERROR ##############################
      .catch((error) => {
        console.log(error);
        return error;
      });
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async listarProcesoSeleccionProveedor(codProcesoSeleccionId: number,ruc: string) {

    // eslint-disable-next-line max-len
    const newLocal = sessionStorage.getItem('token');
    //################################## DEFINIMOS LOS HEADERS-API REST ##############################
    const headers =  new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Origin': '*',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Authorization': newLocal
      });
      //################################ GOLPEAMOS LA API - GET ####################################
      return this.http.get<any>(`${this.apiUrl}${this.urlListProcesoSeleccionProveedor}=${codProcesoSeleccionId}&NroRuc=${ruc}`, { headers }).toPromise()
      //################################## OBTENEMOS UNA RESPUESTA CORRECTA ##############################
      .then((res: any) => {
      console.log(res);
      return res;
      })
      //################################## OBTENEMOS UN ERROR ##############################
      .catch((error) => {
      console.log(error);
      return error;
      });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async listarTipoSubasta() {

    const newLocal = sessionStorage.getItem('token');
    //################################## DEFINIMOS LOS HEADERS-API REST ##############################
      const headers =  new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Origin': '*',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Authorization': newLocal

      });
      //################################ GOLPEAMOS LA API - GET ####################################
      return this.http.get<any>(`${this.apiUrl}${this.urlConstanteLogistica}codigoconstante=${this.tiposubasta}`,{headers}).toPromise()
        //################################## OBTENEMOS UNA RESPUESTA CORRECTA ##############################
        .then((res: any) => {
          console.log(res);
          return res;
        })
        //################################## OBTENEMOS UN ERROR ##############################
        .catch((error) => {
          console.log(error);
          return error;
        });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async listarConfigSubasta(codProcesoSeleccionId: number) {

    // eslint-disable-next-line max-len
    const newLocal = sessionStorage.getItem('token');
    //################################## DEFINIMOS LOS HEADERS-API REST ##############################
    const headers =  new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Origin': '*',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Authorization': newLocal
      });
      //################################ GOLPEAMOS LA API - GET ####################################
      return this.http.get<any>(`${this.apiUrl}${this.urlListConfigSubasta}=${codProcesoSeleccionId}`, { headers }).toPromise()
      //################################## OBTENEMOS UNA RESPUESTA CORRECTA ##############################
      .then((res: any) => {
      console.log(res);
      return res;
      })
      //################################## OBTENEMOS UN ERROR ##############################
      .catch((error) => {
      console.log(error);
      return error;
      });
  }


}
