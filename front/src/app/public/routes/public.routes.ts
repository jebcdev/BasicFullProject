import { Routes } from '@angular/router';
import environment from '@env/environment';
import PublicLayoutComponent from '@public/_layout/public-layout.component';

const publicRoutes: Routes = [
  {
    path: '',
    title: environment.appTitle,
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@public/pages/public-home-page/public-home-page.component'),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('@public/pages/public-login-page/public-login-page.component'),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('@public/pages/public-register-page/public-register-page.component'),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


export default publicRoutes;