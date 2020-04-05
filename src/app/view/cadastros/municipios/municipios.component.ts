import { Component, OnInit } from '@angular/core';
import { CadastrosService } from 'src/app/domain/services/cadastros.service';
import { Municipios } from 'src/app/domain/model/municipios';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent implements OnInit {
  cadastro: any;
  corpo: Municipios;
  municipios: any = [];
  nome: any;
  id: any;
  constructor(public cadastroService: CadastrosService) { 
    this.cadastro = [];
    this.corpo = new Municipios;
  }
                   
  ngOnInit() {
    this.gettodosMunicipios();
    this.pesquisamunicipio();
  }

  gettodosMunicipios() {
    //Get saved list of students
    this.cadastroService
    .getMunicipios()
    .subscribe(data => {
       this.municipios  = Object.values(data);
       this.municipios = this.municipios[3];
      console.log(this.municipios)
      console.log(this.municipios[0].acesso);
      },
       error =>{ 
       console.error(error);})
  }
 
  pesquisamunicipio(){
   
     this.cadastroService.pesquisamunicipio(this.corpo).subscribe(response=>{
      this.municipios = Object.values(response);
      this.municipios = this.municipios[3];
     }) 
  }

  a(a, b){
    console.log(a);
    console.log(b);
    this.nome = a;
    this.id = b;
    
  }
 
  delete() {
    this.cadastroService.deleteMunicipios(this.id).subscribe(Response => {
      
      this.gettodosMunicipios();
    });
    console.log(this.id);
  }

  ativa(id){
    this.cadastroService.municiipoativa(id).subscribe(Response=>{
      this.gettodosMunicipios();
    })
  }  

  desativa(id){
    this.cadastroService.municipiodesativa(id).subscribe(Response=>{
      this.gettodosMunicipios();
      
      })
  }


 

}
