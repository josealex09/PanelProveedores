import { PermisosService } from './core/services/internal/permisos.service';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { MessagesService } from 'app/layout/common/messages/messages.service';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { NotificationsService } from 'app/layout/common/notifications/notifications.service';
import { QuickChatService } from 'app/layout/common/quick-chat/quick-chat.service';
import { ShortcutsService } from 'app/layout/common/shortcuts/shortcuts.service';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
    providedIn: 'root'
})
export class InitialDataResolver implements Resolve<any>
{

    private apiAdmin = environment.backend.Admin;
    private readonly apiListarNavegacion: string;
    public token: any;
    public ruc: string;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        })
    };
    constructor(
        private _messagesService: MessagesService,
        private _navigationService: NavigationService,
        private _notificationsService: NotificationsService,
        private _quickChatService: QuickChatService,
        private _shortcutsService: ShortcutsService,
        private _userService: UserService,
        private _httpClient: HttpClient,
        private _negocioService: PermisosService
    )
    {
        this.apiListarNavegacion = this.apiAdmin + '/Admin/ListarPermisos';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Use this resolver to resolve initial mock-api for the application
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {

/*         this.ruc = jwt_decode(sessionStorage.getItem('usuario'));

        this.token = jwt_decode(sessionStorage.getItem('token')); */

        // Fork join multiple API endpoint calls to wait all of them to finish
        return forkJoin([
/*             this._httpClient.get<any>(`${this.apiListarNavegacion}?Usuario=${'10703259632'}`,this.httpOptions), */
            this._navigationService.get(),
            this._messagesService.getAll(),
            this._notificationsService.getAll(),
            this._quickChatService.getChats(),
            this._shortcutsService.getAll(),
            this._userService.get()
        ]);
        /* .pipe(
            map(([navegacion, messages, notifications, shortcuts, user]) => ({
                    messages,
                    navigation: {
                        compact   : navegacion.Data,
                        default   : navegacion.Data,
                        futuristic: navegacion.Data,
                        horizontal: navegacion.Data
                    },
                    notifications,
                    shortcuts,
                    user
                })
            )
        );; */
    }
}


