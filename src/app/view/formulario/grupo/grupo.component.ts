import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/domain/services/formulario.service';
import { Grupo } from 'src/app/domain/model/grupo';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  cadastro: any;
  corpo: Grupo;  
  grupo:any; 
  nome:any;
  constructor(public formularioService: FormularioService) {
    this.cadastro = [];
    this.corpo = new Grupo;
   }

  ngOnInit() {
    this.gettodosgrupo();
    this.pesquisagrupo();
  }
  gettodosgrupo(){
    this.formularioService
    .getGrupo()
    .subscribe(data => {
       
      this.grupo = data;
      console.log(data);
      },
       error =>{
       console.error(error);})
  }

  pesquisagrupo(){
    
     this.formularioService.pesquisagrupo(this.corpo).subscribe(response=>{
      this.grupo = Object.values(response);
      this.grupo = this.grupo[3];
    })
  }



  a(a){
    console.log(a)
    this.nome = a;
    
  }

  ativa(id){
    this.formularioService.grupoativa(id).subscribe(Response=>{
      this.gettodosgrupo();
    })
  }  

  desativa(id){
    this.formularioService.grupodesativa(id).subscribe(Response=>{
      this.gettodosgrupo();
      
      })
  }


}