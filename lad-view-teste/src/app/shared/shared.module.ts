import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ClienteFormComponent,
    ClienteListComponent,
    PaginaNaoEncontradaComponent,
    AlertDangerComponent,
    HomeComponent,
    

  ],
  imports: [
    CommonModule,
    NgxMaskModule.forChild(),
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  exports: [
    ClienteFormComponent,
    ClienteListComponent,
    PaginaNaoEncontradaComponent,
    AlertDangerComponent,
    HomeComponent
  ]
})
export class SharedModule { }
