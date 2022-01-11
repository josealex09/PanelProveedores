import { DetailsprocessModule } from './modules/admin/detailsprocess/detailsprocess.module';
import { QuotationModule } from './modules/admin/quotation/quotation.module';
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-len */
import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [


    {path: '', pathMatch : 'full', redirectTo: 'sign-in'},

    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)}
        ]
    },



    {
        path: '',
        component: LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },

        children: [
            { path: 'datos', loadChildren: () => import('app/modules/admin/settings/settings.module').then(m => m.SettingsModule) },
            { path: 'convocatorias', loadChildren: () => import('app/modules/admin/quotation/quotation.module').then(m => m.QuotationModule) },
            { path: 'procesos', loadChildren: () => import('app/modules/admin/process/process.module').then(m => m.ProcessModule) },
            { path: 'details/:id',loadChildren: () => import('app/modules/admin/details/details.module').then(m => m.DetailsModule) },
            { path: 'detailsprocess/:id',loadChildren: () => import('app/modules/admin/detailsprocess/detailsprocess.module').then(m => m.DetailsprocessModule) },

        ]
    },


];
