import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfig } from '../../core/models/appconfig';
import { ConfigService } from 'src/app/core/service/app.config.service';
import { Usuario } from 'src/app/core/models/usuario';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

  usuario = new Usuario();
  config: AppConfig;
  subscription: Subscription;

  constructor(
    public configService: ConfigService,
    private authService: AuthService,
  ){ }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.authService.limparAccessToken();
  }

  onLogin() {
    this.authService.login(this.usuario);
  }
}
