import { Component, OnInit } from '@angular/core';
import { ConfiguracoesService } from 'src/app/domain/services/configuracoes.service';
import { Usuarios } from 'src/app/domain/model/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  cadastro: any;
  perfil: any;
  usuario:any = [];
  t:any;
  meu:any = [];
  desativado:any;
  corpo: Usuarios;
  constructor(public configuracoesService: ConfiguracoesService) {
    this.cadastro = [];
    this.corpo = new Usuarios;
   }

  ngOnInit() {
    this.gettodousuario();
    this.gettodoperfil();
  }

  gettodousuario() {
   
    this.configuracoesService
    .getUsuario()
    .subscribe(data => {
      this.usuario = Object.values(data);
      this.usuario = this.usuario[3];
      console.log(this.usuario)
      },
       error =>{
       console.error(error);})
  }
 
  gettodoperfil(){
    this.configuracoesService.getPerfil().subscribe(response => {
      console.log(response);
      this.t=response;
      for (let i = 0; i < this.t.length; i++) {
        this.meu.push(this.t[i].nome);
      }
    })
  console.log(this.meu);
  }
 
  ativar(id){
    this.configuracoesService.usuarioativa(id).subscribe(Response=>{
      this.gettodousuario();
    })
  } 

  desativar(id){
    this.configuracoesService.usuariodesativaativa(id).subscribe(Response=>{
      this.desativado = true;
      setTimeout(function() {
        $('#teste').fadeOut('fast');
     }, 2000);
      this.gettodousuario();
    })
  }

  pesquisausuario(){
    this.configuracoesService.pesquisausuario(this.corpo).subscribe(response => {
      this.usuario = Object.values(response);
      this.usuario = this.usuario[3];
    })
  }

}
