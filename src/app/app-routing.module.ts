import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { LoginComponent } from './security/login/login.component';
import { ErrorComponent } from './pages/erros/error/error.component';
import { AccessComponent } from './pages/erros/access/access.component';
import { NotfoundComponent } from './pages/erros/notfound/notfound.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardComponent},
                    {path: 'pages/empty', component: EmptyComponent},
                ],
            },
            {path:'login', component: LoginComponent},
            {path:'pages/error', component: ErrorComponent},
            {path:'pages/notfound', component: NotfoundComponent},
            {path:'pages/access', component: AccessComponent},
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
