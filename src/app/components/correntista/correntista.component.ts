import { CorrentistaService } from './../../services/correntista.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correntista',
  templateUrl: './correntista.component.html',
  styleUrls: ['./correntista.component.css']
})
export class CorrentistaComponent implements OnInit {
  nome:any;
  cpf:any;
  correntistas: any;

  constructor(private CorrentistaService: CorrentistaService) { }

  ngOnInit(): void {
    this.exibirCorrentistas()
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
    const correntista = {
      nome: this.nome,
      cpf:this.cpf
    };
    console.log(correntista);
    this.CorrentistaService.create(correntista)
    .subscribe(
      Response =>{
        console.log(Response);
        this.exibirCorrentistas()
      },
      error =>{
        console.log(error);
      }
    )
  }

}
