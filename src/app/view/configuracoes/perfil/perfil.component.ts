import { Component, OnInit } from '@angular/core';
import { ConfiguracoesService } from 'src/app/domain/services/configuracoes.service';
import { Perfil } from 'src/app/domain/model/perfil';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  cadastro: any;

  perfil:any = [];
  salvar: any;
  id_perfil: any;
  t:any;
  meu:any = [];
  corpo: Perfil;
  nome:any;
  tipopermissao:any;
  constructor(public configuracoesService: ConfiguracoesService) { 
    this.cadastro = [];
    this.corpo = new Perfil;
  
  }

  ngOnInit() {
    this.gettodoperfil();
    this.gettodosperfil();
  }
  gettodoperfil() {
    //Get saved list of students
    this.configuracoesService
    .getPerfil() 
    .subscribe(data => {
       this.perfil = data;
      console.log(this.perfil)
      },
       error =>{
       console.error(error);})
  }

  predelete(obj){
    this.salvar = obj.nome;
    this.id_perfil = obj.id_perfil;
    this.nome = obj.nome;
    this.tipopermissao = obj.tipopermissao;
  }
 
  essatabelaeboolean() {
    
  }

  gettodosperfil(){
    this.configuracoesService.getPerfil().subscribe(response => {
      console.log(response);
      this.t=response;
      for (let i = 0; i < this.t.length; i++) {
        this.meu.push(this.t[i].nome);
      }
    }) 
  console.log(this.meu);
  }
 

  pesquisaperfil(){
    if(this.corpo.tipopermissao == 'undefined'){
      this.corpo.tipopermissao = '';
    }
    this.configuracoesService.pesquisaperfil(this.corpo).subscribe(response => {
      this.perfil = Object.values(response);
       this.perfil = this.perfil[3];
    })
  }

  delete() {
    this.configuracoesService.deletePerfil(this.id_perfil).subscribe(Response => {
      
      this.gettodosperfil();
    });
    console.log(this.id_perfil); 
  }

  salvardados(){
    this.configuracoesService.createPerfil(this.corpo).subscribe(Response => {
      console.log(Response);
      window.location.reload();
    })
  } 

  editardados(){

  }

}
