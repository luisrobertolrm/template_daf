import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import {CheckboxModule} from 'primeng/checkbox';

import { Formulario1Component } from './formulario1/formulario1.component';
import { ListFormualario1Component } from './list-formualario1/list-formualario1.component';

@NgModule({
  declarations: [
    AppComponent,
    Formulario1Component,
    ListFormualario1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    CheckboxModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
