import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros-routing.module';

import { UsuariosModule } from './usuarios/usuarios.module';
import { PerfisModule } from './perfis/perfis.module';
import { AutorizacoesModule } from './autorizacoes/autorizacoes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    UsuariosModule,
    PerfisModule,
    AutorizacoesModule
  ]
})
export class CadastrosModule { }
