import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Autorizacao } from '../models/autorizacao';
import { GenericService } from './_generic.service';

@Injectable({ providedIn: 'root' })
export class AutorizacaoService extends GenericService<Autorizacao> {

  getApiUrl(): string {
    return `${environment.apiUrl}/login-autorizacoes`;
  }

}
