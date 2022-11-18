import { NgModule } from '@angular/core';
import { HomeComponent } from './layout/home/home.component';
import { CreatAccountComponent } from './layout/creat-account/creat-account.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"cadastrar/paciente", component:CreatAccountComponent},
  {path:"login/paciente", component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
