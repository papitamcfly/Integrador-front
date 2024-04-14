import { Routes } from '@angular/router';
import { LoginGuard } from './auth/login.guard';
import { VerificacionGuard } from './auth/verificacion.guard';
import { RolGuard } from './auth/rol.guard';
import { Userguard } from './auth/user.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
      },
      {
        path: 'verificacion',
        loadChildren: () => import('./verificacion/verificacion.module').then(m => m.VerificacionModule),
        canActivate: [VerificacionGuard]
      },
      {
        path: 'generos/create',
        loadChildren: () => import('./generos/generos-store/generos-store.module').then(m => m.GenerosStoreModule),
        canActivate: [LoginGuard, Userguard]
      },
      {
        path: 'generos/index',
        loadChildren: () => import('./generos/generos-index/generos-index.module').then(m => m.GenerosIndexModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'generos/edit/:id',
        loadChildren: () => import('./generos/generos-edit/generos-edit.module').then(m => m.GenerosEditModule),
        canActivate: [LoginGuard, Userguard]
      },
      {
        path: 'product-list/index',
        loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'cart/index',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'ordenes/pendientes',
        loadChildren: () => import('./ordenes/ordenes-pendientes/ordenes-pendientes.module').then(m => m.OrdenesPendientesModule),
        canActivate: [LoginGuard]
      },
      {
      path: 'ordenes/preparando',
      loadChildren: () => import('./ordenes/ordenes-en-proceso/ordenes-en-proceso.module').then(m => m.OrdenesEnProcesoModule),
      canActivate: [LoginGuard]
    },
    {
      path: 'ordenes/all-orders',
      loadChildren: () => import('./ordenes/all-orders/all-orders.module').then(m => m.AllOrdersModule),
      canActivate: [LoginGuard]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
