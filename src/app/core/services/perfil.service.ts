import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Perfil } from '../models/perfil';
import { GenericService } from './_generic.service';

@Injectable({ providedIn: 'root' })
export class PerfilService extends GenericService<Perfil>{

    getApiUrl(): string {
        return `${environment.apiUrl}/login-perfis`;
      }


}
