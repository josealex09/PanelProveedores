import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    response: boolean = false;
    menu = new Array();
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(route.url[0].path==='mas'){
          return true;
        }
        const response: any = this.verify(route.url[0].path.replace(/ /g, ''));
        if(response){
          return true;
        }else {
          Swal.fire({
            title: '¡Acceso denegado!',
            text: 'Ud no tiene prmisos para acceder a esta opción',
            icon: 'error',
            customClass: {container: 'custom-sweetalert custom-payment-cancel'},
            iconHtml: '<img src="./assets/img/svg/ico-cancel-request.svg" class="img-fluid" alt="">',
            showConfirmButton: true,
            showCancelButton: false,
            allowOutsideClick: true,
            allowEscapeKey: true,
          });
          return false;
        }
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    verify(route:  string){
      this.menu = JSON.parse(sessionStorage.getItem('options'));
      let resp = false;
      for (const element of this.menu) {
        if(element  ===route){
          resp= true;
        }else {
          resp= false;
        }
        if(resp){
          break;
        }
      };
      return resp;
    }
}
