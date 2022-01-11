import { Message } from 'app/layout/common/messages/messages.types';
import { ProveedorCotizacion } from 'app/core/interfaces/registroproveedores/cotizacion';
import { QuotationService } from './../../../core/services/internal/quotation/quotation.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
firstFormGroup: FormGroup;

secondFormGroup: FormGroup;
fileUrl: any;
filename: any;
nombre: string;

codEstado: number = 0;
tipomoneda = new Array();
dataFinal: ProveedorCotizacion;

datadocument = [];
datadocumentProveedorCotizacion = [];

dataCalendario=[];
public displayedColumns3: string[] = ['tipodoc','descripcion','ver'];
public displayedColumnsCalendario: string[] = ['id','nombreetapa','detalle','fechainicio','fechafin'];

public displayedColumnsDocumentosAdjuntos: string[] = ['tipodoc','descripcion','ver','adjuntado','opciones'];

private id = 0;
// eslint-disable-next-line @typescript-eslint/member-ordering
public dataSource3 = new MatTableDataSource<any>(this.datadocument);
// eslint-disable-next-line @typescript-eslint/member-ordering
public dataSource4 = new MatTableDataSource<any>(this.datadocumentProveedorCotizacion);


// eslint-disable-next-line @typescript-eslint/member-ordering
public dataSourceCalendario = new MatTableDataSource<any>(this.dataCalendario);

// eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private http: HttpClient, private route: ActivatedRoute, private qtService: QuotationService,private _formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,private md: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
        cNombreRequerimiento : [],
        cDescripcionRequerimiento:[],
        nValorReferencial:[],
        listadocumentos : []
    });

    this.secondFormGroup = this._formBuilder.group({
        nMontoCotizacion : [0],
        cComentario:[],
        nCodMoneda: [1],
        cRespuesta:[],
        cObservacion:[],
        listadocumentos : []
    });

    this.route.params.subscribe((res: any)=>{
        this.id = res.id;
    });

    this.nombre = sessionStorage.getItem('detailName');
    this.getInfo();
    this.getTipoMoneda();
    this.getCargaProveedorCotizacion();
}

getTipoMoneda(): void{
    this.qtService.listarMoneda().then((res)=> {
        console.log(res, 'respuesta de listar el tipo de moneda');
        this.tipomoneda = res.Data;
    });
}
getInfo(): void{
    this.qtService.listarEspecificacionesDocumentos(this.id).then((res: any)=>{
        console.log(res);
        this.dataSource3 = new MatTableDataSource(res.Data.DocumentosCotizaciones);
        this.dataSourceCalendario = new MatTableDataSource(res.Data.CalendarioCotizaciones);
        this.firstFormGroup.controls['cNombreRequerimiento'].setValue(res.Data.cNombreRequerimiento);
        this.firstFormGroup.controls['cDescripcionRequerimiento'].setValue(res.Data.cDescripcionResumida);
        this.firstFormGroup.controls['nValorReferencial'].setValue(res.Data.nValorReferencial);
    });
}

/*   const blob = new Blob([element.bContenido],{ type: 'application/pdf'});
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');

  a.href = url;

  a.download = element.cNombreDoc + element.cExtension;
  a.click();
  window.URL.revokeObjectURL(url); */

downloadFile(element): void {
const pdf = atob(element.bContenido);
console.log(pdf);

const encoded = new TextEncoder().encode(pdf);
console.log(encoded);

const blob = new Blob([new Uint8Array(encoded)], { type: 'application/pdf' });
const exportUrl = URL.createObjectURL(blob);
window.open(exportUrl);
URL.revokeObjectURL(exportUrl);

/* const blob = new Blob([encoded],{ type: 'application/pdf'});
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');

  a.href = url;

  a.download = element.cNombreDoc + element.cExtension;
  a.click();
  window.URL.revokeObjectURL(url);
 */

/*   const newBlob = new Blob([encoded], {type: 'application/pdf'});
    console.log(newBlob);
  const linkElement = document.createElement('a');
  const url = URL.createObjectURL(newBlob);
  linkElement.setAttribute('href', url);
  linkElement.setAttribute('download', element.cNombreDoc + element.cExtension);
  const clickEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
   'cancelable': false
  });
  linkElement.dispatchEvent(clickEvent); */

/*   fetch(pdf)
  .then((response) => {
    // response.data -> response data base64 encoded
    // decoding the data via atob()
    const byteArray = new Uint8Array(atob(pdf).split('').map(char => char.charCodeAt(0)));
    return new Blob([byteArray], {type: 'application/pdf'});
  })
  .then((blob) => {
    // Here is your URL you can use
    const url = window.URL.createObjectURL(blob);
    // i.e. display the PDF content via iframe
    document.querySelector('iframe').src = url;
  }); */
}

getPDF(urla): any{
    const url = urla;
    const httpOptions = {
      'responseType'  : 'arraybuffer' as 'json'
       //'responseType'  : 'blob' as 'json'        //This also worked
    };
    return this.http.get<any>(url, httpOptions);
    }
getCargaProveedorCotizacion(): void {
    this.qtService.listarCotizacionProveedor(this.id,sessionStorage.getItem('usuario')).then((res: any)=>
    {
        console.log(res);
        this.dataSource4 = new MatTableDataSource(res.Data.DocumentosProveedorCotizacion);
        this.codEstado = res.Data.nEstado;
        this.secondFormGroup.controls['nMontoCotizacion'].setValue(res.Data.nCotizacion);
        this.secondFormGroup.controls['cComentario'].setValue(res.Data.cComentario);
        this.secondFormGroup.controls['nCodMoneda'].setValue(res.Data.nCodMoneda);
        this.secondFormGroup.controls['cObservacion'].setValue(res.Data.cObservacion);
    });
}

guardarMontoCotizado(): void {
    this.dataFinal = {

        nCotizacionRequerimientoCompraId: this.id,
        cNroRuc: sessionStorage.getItem('usuario'),
        nCodMoneda: this.secondFormGroup.value.nCodMoneda,
        nCotizacion: this.secondFormGroup.value.nMontoCotizacion,
        cComentario: this.secondFormGroup.value.cComentario,
        cRespuesta:this.secondFormGroup.value.cRespuesta,
        cObservacion:this.secondFormGroup.value.cObservacion,
        documentos: [],
    };
    console.log(this.dataFinal);

    this.qtService.registrarMontoCotizacion(this.dataFinal).then((res: any)=>{
        console.log(res,'respuesta de api');
        if(res.IsCorrect === true)
            {
                Swal.fire({
                    title: '¡Hecho!',
                    text: res.Message,
                    icon: 'success',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 3500
                });
                this.md.closeAll();
            }
    });
}
}
