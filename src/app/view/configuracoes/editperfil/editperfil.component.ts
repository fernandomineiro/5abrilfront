import { Component, OnInit } from '@angular/core';
import { ConfiguracoesService } from 'src/app/domain/services/configuracoes.service';
import { Perfil } from 'src/app/domain/model/perfil';
import { ActivatedRoute } from "@angular/router";

@Component({ 
  selector: 'app-editperfil',
  templateUrl: './editperfil.component.html',
  styleUrls: ['./editperfil.component.css']
})
export class EditperfilComponent implements OnInit {
  corpo: Perfil;
  cadastro: any;
  id:any;
  ma:any;
  nome:any;
  tipopermissao:any;
  sucesso:any;
  
  constructor(public configuracoesService: ConfiguracoesService,private route: ActivatedRoute) {
    this.cadastro = [];
    this.corpo = new Perfil;
   }
  
  ngOnInit() {
    this.buscaperfil();
  } 
 
  buscaperfil(){
    this.route.params.subscribe(params => this.id = params['id']);
    this.corpo.id_perfil = this.id;
    this.configuracoesService.pesquisadaperfil(this.corpo).subscribe(response => {
      this.ma = Object.values(response);
      this.ma = this.ma[3];
      console.log(this.ma);
      this.nome = this.ma[0].nome;
      this.tipopermissao = this.ma[0].tipopermissao;
    })
  } 
 
  editarperfil(){
   console.log(this.corpo.id_perfil);
   if(!this.corpo.nome){
     this.corpo.nome = this.nome;
   }
   if(!this.corpo.tipopermissao){
     this.corpo.tipopermissao = this.tipopermissao;
   }
 
   this.configuracoesService.updatePerfil(this.corpo).subscribe(response=>{
    this.sucesso = true;
    setTimeout(function() {
      $('#sucesso').fadeOut('fast');
      window.location.href = "http://localhost:4200/#/sistema/configuracao/perfil";
   }, 2000);
   })
  }
  
}
