import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';

const routes: Routes = [
    {
        path: 'usuarios',
        component: UsuarioListaComponent,
        //   canActivate: [AuthGuard],
        //   data: { roles: ['ROLE_CADASTRO_USUARIOS'] },
    },
    {
        path: 'usuario',
        component: UsuarioFormComponent,
        //   canActivate: [AuthGuard],
        //   data: { roles: ['ROLE_CADASTRO_USUARIOS'] },
    },
    {
        path: 'usuario/:id',
        component: UsuarioFormComponent,
        //   canActivate: [AuthGuard],
        //   data: { roles: ['ROLE_CADASTRO_USUARIOS'] },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsuariosRoutingModule {}
