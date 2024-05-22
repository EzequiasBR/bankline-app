import { CorrentistaService } from './../../services/correntista.service';
import { MovimentacaoService } from './../../services/movimentacao.service';
import { Component, OnInit } from '@angular/core';
// import { data } from '@tensorflow/tfjs';
// import { error } from 'console';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css'],
})
export class MovimentacaoListComponent implements OnInit {
  movimentacoes: any;
  correntistas: any;
  correntista: any;

  constructor(
    private MovimentacaoService: MovimentacaoService,
    private CorrentistaService: CorrentistaService
  ) {}

  ngOnInit(): void {
   this.exibirCorrentistas();
  }

  listMovimentacoes(): void {
    this.MovimentacaoService.findByIdConta(this.correntista.id)
    .subscribe(
      (data: any) => {
        this.movimentacoes = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  exibirCorrentistas(): void {
    this.CorrentistaService.list().subscribe(
      (data: any) => {
        this.correntistas = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
