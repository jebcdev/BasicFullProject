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
          import('@public/pages/_home/public-home-page.component'),
      },
      {
        path: 'auth/login',
        loadComponent: () =>
          import('@public/pages/auth/public-login-page/public-login-page.component'),
      },
      {
        path: 'auth/register',
        loadComponent: () =>
          import('@public/pages/auth/public-register-page/public-register-page.component'),
      },
    ],
  },
  
];


export default publicRoutes;