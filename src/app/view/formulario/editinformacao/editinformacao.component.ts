import { Component, OnInit } from '@angular/core';
import { Informacao } from 'src/app/domain/model/informacao';
import { FormularioService } from 'src/app/domain/services/formulario.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-editinformacao',
  templateUrl: './editinformacao.component.html',
  styleUrls: ['./editinformacao.component.css']
})
export class EditinformacaoComponent implements OnInit {
  corpo: Informacao;
  id:any;
  ma:any;
  sucesso:any;
  constructor(public formularioService: FormularioService, private route: ActivatedRoute) { 
    this.corpo = new Informacao;
  }
  
  ngOnInit() {
    this.getinfomacao();
    
  }
 
  getinfomacao(){
    this.route.params.subscribe(params => this.id = params['id']);
    this.corpo.id_informacao = this.id;
    
    this.formularioService.pesquisadainformacao(this.corpo).subscribe(response=>{
      this.ma = Object.values(response);
      this.ma = this.ma[3];
      console.log(this.ma);
      this.corpo.nome =  this.ma[0].nome;
      this.corpo.valor =  this.ma[0].valor;
      this.corpo.posicao =  this.ma[0].posicao;
    })

  }

  editarinformacao(){
    
    this.formularioService.updateInformacao(this.corpo).subscribe(response=>{
     this.sucesso = true;
     setTimeout(function() {
       $('#sucesso').fadeOut('fast');
    }, 2000);
    })
   }

 

}
