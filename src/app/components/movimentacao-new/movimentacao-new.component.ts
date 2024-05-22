import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { error } from 'console';

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})
export class MovimentacaoNewComponent implements OnInit {

  correntistas: any;
  correntista: any;
  valor: any;
  descricao: any;
  tipo: any;
  dataHora: any;

  constructor(
    private MovimentacaoService: MovimentacaoService,
    private CorrentistaService: CorrentistaService
  ) {}

  ngOnInit(): void {
    this.exibirCorrentistas();
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

  save(): void {
    console.log(this.correntista);
    const movimentacao = {
      valor:this.valor,
      descricao:this.descricao,
      tipo:this.tipo,
      idConta:this.correntista.id,
      dataHora:this.dataHora
    };
    console.log(movimentacao);
    this.MovimentacaoService.create(movimentacao)
    .subscribe(
      Response =>{
        console.log(Response);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
