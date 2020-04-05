import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/domain/services/formulario.service';
import { Informacao } from 'src/app/domain/model/informacao';

 
@Component({
  selector: 'app-informacao',
  templateUrl: './informacao.component.html',
  styleUrls: ['./informacao.component.css']
})
export class InformacaoComponent implements OnInit {
  cadastro: any;
  corpo: Informacao;
  informacao:any = [];
  nome:any;
  constructor(public formularioService: FormularioService) { 
    this.cadastro = [];
    this.corpo = new Informacao;
  }

  ngOnInit() { 
    this.gettodainformacao();
    this.pesquisainformacao();
  }

  gettodainformacao(){
    this.formularioService
    .getInformacao()
    .subscribe(data => {
       this.informacao = data;
      console.log(this.informacao)
      },
       error =>{
       console.error(error);})
  }

  pesquisainformacao(){
    this.formularioService.pesquisainformacao(this.corpo).subscribe(response =>{
      this.informacao = Object.values(response);
      this.informacao = this.informacao[3];
    })
  }

  a(a){
    console.log(a)
    this.nome = a;
    
  } 
  excluir(){
    this.formularioService.deleteInformacao(this.corpo).subscribe(response=>{
      console.log(response);
    })
  }
   
  ativa(id){
    this.formularioService.informacaoativa(id).subscribe(Response=>{
      this.gettodainformacao();
    })
  }  

  desativa(id){
    this.formularioService.informacaodesativa(id).subscribe(Response=>{
      this.gettodainformacao();
      
      })
  }

}
