import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { CardModule }  from 'primeng/card';

import { Formulario1Component } from './formulario1/formulario1.component';
import { ListFormualario1Component } from './list-formualario1/list-formualario1.component';

@NgModule({
  declarations: [
    AppComponent,
    Formulario1Component,
    ListFormualario1Component,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    CheckboxModule,
    TableModule,
    CalendarModule,
    DialogModule,
    BrowserAnimationsModule,
    AvatarModule,
    CardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
