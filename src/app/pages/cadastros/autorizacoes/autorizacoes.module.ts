import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorizacoesRoutingModule } from './autorizacoes-routing.module';
import { AutorizacaoFormComponent } from './autorizacao-form/autorizacao-form.component';
import { AutorizacaoListaComponent } from './autorizacao-lista/autorizacao-lista.component';


@NgModule({
  declarations: [
    AutorizacaoFormComponent,
    AutorizacaoListaComponent
  ],
  imports: [
    CommonModule,
    AutorizacoesRoutingModule
  ]
})
export class AutorizacoesModule { }
