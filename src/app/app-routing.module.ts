import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { LoginComponent } from './security/login/login.component';
import { ErrorComponent } from './pages/erros/error/error.component';
import { AccessComponent } from './pages/erros/access/access.component';
import { NotfoundComponent } from './pages/erros/notfound/notfound.component';
import { AuthGuard } from './security/auth.guard';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_DASHBOARD'] } },
                    {path: 'empty', component: EmptyComponent},
                ],
            },
            {
              path: 'cadastros',
              loadChildren: () => import('./pages/cadastros/cadastros.module').then((m) => m.CadastrosModule),
            },
            {path: 'login', component: LoginComponent},
            {path: 'error', component: ErrorComponent},
            {path: 'notfound', component: NotfoundComponent},
            {path: 'access', component: AccessComponent},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: '**', redirectTo: 'notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled', useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
