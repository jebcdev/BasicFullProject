import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('@public/routes/public.routes') },
  {
    path: 'dashboard',

    loadChildren: () => import('@private/routes/private.routes'),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
