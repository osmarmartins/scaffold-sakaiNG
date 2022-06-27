import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { PerfilListaComponent } from './perfil-lista/perfil-lista.component';

const routes: Routes = [
    {
        path: 'perfis',
        component: PerfilListaComponent,
        //   canActivate: [AuthGuard],
        //   data: { roles: ['ROLE_CADASTRO_PERFIS'] },
    },
    {
        path: 'perfil',
        component: PerfilFormComponent,
        //   canActivate: [AuthGuard],
        //   data: { roles: ['ROLE_CADASTRO_PERFIS'] },
    },
    {
        path: 'perfil/:id',
        component: PerfilFormComponent,
        //   canActivate: [AuthGuard],
        //   data: { roles: ['ROLE_CADASTRO_PERFIS'] },
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfisRoutingModule { }
