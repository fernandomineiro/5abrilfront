import { Component, OnInit } from '@angular/core';
import { CultivoService } from 'src/app/domain/services/cultivo.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  cadastro: any;
  id_contrato:any;
  salvar:any;
  contrato:any = [];
  constructor(public cultivoService: CultivoService) { 
    this.cadastro = [];
  }

  ngOnInit() {
    this.gettodoscontrato();
  }

  gettodoscontrato(){
    this.cultivoService
    .getContrato()
    .subscribe(data => {
       this.contrato = data;
      console.log(this.contrato)
      },
       error =>{
       console.error(error);})
  }

  predelete(obj){
    this.salvar = obj.nome;
    this.id_contrato = obj.id_contrato;
    
  }
  redelete(){
    return this.salvar;
    
  }
 
  delete() {
    this.cultivoService.deleteContrato(this.id_contrato).subscribe(Response => {
      
      this.gettodoscontrato();
    });
    console.log(this.id_contrato);
  }

}
