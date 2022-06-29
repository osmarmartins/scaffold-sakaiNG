import { AutorizacaoService } from './../../../../core/services/autorizacao.service';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Autorizacao } from 'src/app/core/models/autorizacao';
import { Perfil } from 'src/app/core/models/perfil';
import { PerfilService } from 'src/app/core/services/perfil.service';
import { AppToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.scss']
})
export class PerfilFormComponent implements OnInit, AfterViewInit {
    @ViewChild('autofocus') autofocus: ElementRef;

    todasAutorizacoes: Autorizacao[] = [];
    autorizacoesDisponiveis: Autorizacao[] = [];
    autorizacoesSelecionadas: Autorizacao[] = [];
    autorizacoesSelecionadasPerfil: Autorizacao[] = [];

    perfil = new Perfil();
    status = [
      {label: 'Ativo', value: 'ATIVO'},
      {label: 'Inativo', value: 'INATIVO'}
    ];

    ngAfterViewInit(): void  {
      setTimeout(() => this.autofocus.nativeElement.focus());
   }

   ngOnInit(): void {
      this.getAutorizacoes();
      const id = this.route.snapshot.params?.id;
      if (id) {
        this.carregar(id);
      }
    }

    constructor(
      private service: PerfilService,
      private autorizacaoService: AutorizacaoService,
      private toast: AppToastService,
      private router: Router,
      private route: ActivatedRoute,
    ) { }

    carregar(id: number): void {
      this.service.buscar(id).subscribe(
        (perfil) => {
            this.perfil = perfil;
            this.getAutorizacoesDisponiveis();
        },
        () => this.toast.error('Não foi possível carregar os dados do perfil!')
      );
    }

    private getAutorizacoes(): void {
        this.autorizacaoService.listarAtivos().subscribe(
            (autorizacoes) => this.todasAutorizacoes = autorizacoes,
        () => this.toast.error('Não foi possível carregar relação de autorizações!')
        );
    }

    private getAutorizacoesDisponiveis(): void {
        if (this.perfil.autorizacoes) {
            this.autorizacoesDisponiveis = this.todasAutorizacoes.filter(a => !this.perfil.autorizacoes.find(p => p.id === a.id));
        } else {
            this.autorizacoesDisponiveis = [...this.todasAutorizacoes];
        }
        this.autorizacoesSelecionadas = [];
    }

    criar(): void {
      this.perfil = new Perfil();
      this.router.navigate(['cadastros', 'perfis']);
      setTimeout(() => this.autofocus.nativeElement.focus(), 0);
    }

    salvar(): void {
      this.service.salvar(this.perfil).subscribe(
        (perfil) => {
          this.perfil = perfil;
          this.toast.success('Operação realizada com sucesso!', 'Os dados foram salvos');
          this.router.navigate(['cadastros', 'perfis', perfil.id]);
        },
        () => this.toast.error('Erro na operação!', 'Não foi possível salvar os dados')
      );
    }

    voltar(): void {
      this.router.navigate(['cadastros', 'perfis', 'lista']);
    }

    adicionarAutorizacao(): void {
        this.perfil.autorizacoes = [...this.autorizacoesSelecionadas, ...this.perfil.autorizacoes || []];
        this.getAutorizacoesDisponiveis();
    }

    aoExcluir(autorizacao: Autorizacao): void {
        this.perfil.autorizacoes = this.perfil.autorizacoes.filter(a => a.id !== autorizacao.id);
        this.getAutorizacoesDisponiveis();
    }

    aoExcluirSelecao(): void {
        this.perfil.autorizacoes = this.perfil.autorizacoes.filter(a => !this.autorizacoesSelecionadasPerfil.find(s => a.id === s.id));
        this.autorizacoesSelecionadasPerfil = [];
        this.getAutorizacoesDisponiveis();
    }

}
