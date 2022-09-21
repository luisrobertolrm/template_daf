import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formulario1Component } from './formulario1/formulario1.component';
import { ListFormualario1Component } from './list-formualario1/list-formualario1.component';

const routes: Routes = [{path:'lista1', component:ListFormualario1Component}, {path:'form1', component: Formulario1Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
