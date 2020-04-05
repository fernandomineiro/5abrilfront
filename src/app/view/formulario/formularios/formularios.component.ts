import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/domain/services/formulario.service';
import { Formularios } from 'src/app/domain/model/formularios';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  cadastro: any;
  formulario:any;
  corpo: Formularios;
  
  constructor(public formularioService: FormularioService) {
    this.cadastro = [];
    this.corpo = new Formularios;
   }
 
  ngOnInit() {
    this.gettodosformulario();
  }

  gettodosformulario(){
    this.formularioService
    .getFormulario()
    .subscribe(data => {
      this.formulario = Object.values(data);
       this.formulario = this.formulario[3];
       console.log(this.formulario);
      
      },
       error =>{
       console.error(error);})
  }
 
  pesquisaformulario(){
    this.formularioService.pesquisaformulario(this.corpo).subscribe(response => {
      this.formulario = Object.values(response);
      this.formulario = this.formulario[3];
       
    })
  }

  ativa(id){
    this.formularioService.formularioativa(id).subscribe(Response=>{
      this.gettodosformulario();
     
    })
  }  

  desativa(id){
    this.formularioService.formulariodesativa(id).subscribe(Response=>{
      this.gettodosformulario();
      
      })
  }

}
