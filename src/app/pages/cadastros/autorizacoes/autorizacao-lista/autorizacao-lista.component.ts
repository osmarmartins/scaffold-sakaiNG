import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { AppToastService } from 'src/app/core/services/toast.service';
import { Autorizacao } from 'src/app/core/models/autorizacao';
import { AutorizacaoFilter } from 'src/app/core/filters/autorizacao.filter';
import { ListagemPaginada } from 'src/app/core/listagem-paginada';
import { AtivoDescricao, AtivoStyle } from 'src/app/core/enums/ativo.enum';
import { AutorizacaoService } from 'src/app/core/services/autorizacao.service';

@Component({
    selector: 'app-autorizacao-lista',
    templateUrl: './autorizacao-lista.component.html',
    styleUrls: ['./autorizacao-lista.component.scss'],
})
export class AutorizacaoListaComponent {
    cadastroDialog: boolean;
    itens: Autorizacao[] = [];
    item = new Autorizacao();
    itensSelecionados: Autorizacao[] = [];

    filtro = new AutorizacaoFilter();
    loading = true;
    totalRecords = 0;

    constructor(
        private service: AutorizacaoService,
        private toast: AppToastService,
        private confirmationService: ConfirmationService,
        private router: Router
    ) {}

    aoCriar(): void {
        this.router.navigate(['cadastros', 'autorizacoes']);
    }

    aoAlterar(item: Autorizacao): void {
        this.router.navigate(['cadastros', 'autorizacoes', item.id]);
    }

    aoCarregar(event: LazyLoadEvent = null) {
        this.filtro.size = event?.rows;
        this.filtro.page = Math.ceil(event?.first / event?.rows);
        this.listar();
    }

    listar(): void {
        this.loading = true;
        this.service.listar(this.filtro).subscribe(
            (data: ListagemPaginada<Autorizacao>) => {
                this.itens = data.content;
                this.totalRecords = data.totalElements;
                this.loading = false;
            },
            (error) => {
                this.loading = false;
                this.toast.error(error);
            }
        );
    }

    aoExcluirSelecao(): void {
        this.confirmationService.confirm({
            message: 'Confirma excluir os clientes selecionados?',
            accept: () => {
                this.itensSelecionados.forEach((i) => this.excluir(i));
                this.itensSelecionados = [];
                this.toast.success('Operação realizada com sucesso!');
            },
        });
    }

    aoExcluir(item: Autorizacao): void {
        this.confirmationService.confirm({
            message: `Confirma excluir o cliente: <br><br> ${item.descricao} ?`,
            accept: () => this.excluir(item),
        });
    }

    excluir(item: Autorizacao): void {
        this.service.excluir(item).subscribe(
            () => {
                this.itens = this.itens.filter((i) => i.id !== item.id);
                this.item = new Autorizacao();
                this.toast.success(
                    'Operação realizada com sucesso!',
                    `Cliente excluido: ${item.id} - ${item.descricao}`
                );
            },
            (error) => {
                this.toast.error(
                    'Erro na operação!',
                    'Não foi possível excluir o cliente'
                );
            }
        );
    }

    getSituacaoStyle(situacao: string): string {
        return AtivoStyle.get(situacao);
    }

    getSituacaoDescricao(situacao: string): string {
        return AtivoDescricao.get(situacao);
    }
}
