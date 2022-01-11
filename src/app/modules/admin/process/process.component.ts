import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcessService } from 'app/core/services/internal/process/process.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
    data = new Array();
    proc: any;
    estados = new Array();
    codEstado: number;
    ruc: string;
  constructor(private procService: ProcessService,private router: Router) {
    this.data = [
        {name:'CÓDIGO:'},
        {name:'PROCESO:'},
        {name:'TIPO:'},
        {name:'ETAPA:'},
        {name:'FECHA:'},
        {name:'RUBRO:'}
      ];

  }

  ngOnInit(): void {
    this.getListarEstados();
  }
  getCodEstado(cod: any): void{
    this.codEstado = cod;
    this.ruc = sessionStorage.getItem('usuario');
  }
  getProcess(): void{
    this.procService.listarProcesos(this.codEstado,this.ruc).then((res: any)=>{
        this.proc = res.Data;
      });
  }
  getListarEstados(): void{
    this.procService.listarEstados().then((res)=> {
        console.log(res, 'respuesta de listar las etapas');
        this.estados = res.Data;
    });
}
goto(process: any): void{
    const ida = process.cNroProcesoSeleccion;
    const naproc=process.NombreProcesoSeleccion;
    const rub = process.NombreRubro;
    const nivel = process.nNivel;

    sessionStorage.setItem('detailName', ida );
    sessionStorage.setItem('detailNameProcess',naproc);
    sessionStorage.setItem('detailNameRubro',rub);
    sessionStorage.setItem('detailNameNivel',nivel);
    this.router.navigate([`detailsprocess/${process.nProcesoSeleccionId}`]);
  }

}
