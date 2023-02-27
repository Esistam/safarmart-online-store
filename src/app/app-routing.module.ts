import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';

const moduleRoutes: Routes = [
  {
    path:"",
    loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule)
  }
];
const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultComponent,
    children: moduleRoutes
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
