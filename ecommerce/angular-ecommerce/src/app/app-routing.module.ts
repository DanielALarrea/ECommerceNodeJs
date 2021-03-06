import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'home/:id',
    component: HomeComponent
  },
  {
    path: 'home/:id/admin',
    component: AdminDisplayComponent
  },
  {
    path: 'home/:id/profile',
    component: UserDisplayComponent
  },
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
