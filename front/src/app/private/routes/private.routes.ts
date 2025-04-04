import { Routes } from '@angular/router';
import environment from '@env/environment';
import PrivateLayoutComponent from '@private/_layout/private-layout.component';

const privateRoutes: Routes = [
  {
    path: '',
    title: environment.appTitle,
    component: PrivateLayoutComponent,
  },
  
];


export default privateRoutes;