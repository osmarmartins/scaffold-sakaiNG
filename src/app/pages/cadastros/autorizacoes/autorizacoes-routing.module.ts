import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizacaoFormComponent } from './autorizacao-form/autorizacao-form.component';
import { AutorizacaoListaComponent } from './autorizacao-lista/autorizacao-lista.component';

const routes: Routes = [
    {
        path: 'autorizacoes',
        component: AutorizacaoListaComponent,
        //   canActivate: [AuthGuard],
        //   data: { roles: ['ROLE_CADASTRO_AUTORIZACOES'] },
    },
    {
        path: 'autorizacao',
        component: AutorizacaoFormComponent,
        //   canActivate: [AuthGuard],
        //   data: { roles: ['ROLE_CADASTRO_AUTORIZACOES'] },
    },
    {
        path: 'autorizacao/:id',
        component: AutorizacaoFormComponent,
        //   canActivate: [AuthGuard],
        //   data: { roles: ['ROLE_CADASTRO_AUTORIZACOES'] },
    },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorizacoesRoutingModule { }
