import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',loadChildren:()=>import('@public/routes/public.routes')}
];
