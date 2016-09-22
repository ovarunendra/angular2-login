import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { PrivateComponent } from './private.component';

const appRoutes: Routes = [
  { path: 'home', component: PrivateComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: PrivateComponent },
  { path: '**', component: PrivateComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
