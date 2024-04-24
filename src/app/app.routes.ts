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
    {
      path: 'ingresos/base',
      loadChildren: () => import('./ingresos/base-ingresos/ingresos.module').then(m => m.IngresosModule),
      canActivate: [LoginGuard]
    },
    {
      path: 'productos/index',
      loadChildren: () => import('./productos/lista-productos/lista-productos.module').then(m => m.ListaProductosModule),
      canActivate: [LoginGuard,RolGuard]
    },
    {
      path: 'productos/store',
      loadChildren: () => import('./productos/crear-productos/crear-productos.module').then(m => m.CrearProductosModule),
      canActivate: [LoginGuard,RolGuard]
    },
    {
      path: 'productos/:id/edit',
      loadChildren: () => import('./productos/editar-productos/editar-productos.module').then(m => m.EditarProductosModule),
      canActivate: [LoginGuard,RolGuard]
    },
    {
    path: 'all-logs',
    loadChildren: () => import('./datalogs/datalogs.module').then(m => m.LogsModule),
    canActivate: [LoginGuard, RolGuard]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
