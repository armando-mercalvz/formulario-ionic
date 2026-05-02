import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
  {
    path: 'formulario',
    loadComponent: () => import('./pages/formulario/formulario.page').then( m => m.FormularioPage)
  },
  {
    path: 'productos',
    loadComponent: () => import('./pages/productos/productos.page').then( m => m.ProductosPage)
  },
];
