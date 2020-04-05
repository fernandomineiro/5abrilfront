import { Component, OnInit } from '@angular/core';
import { CadastrosService } from 'src/app/domain/services/cadastros.service';
import { Filiais } from 'src/app/domain/model/filiais';

@Component({
  selector: 'app-filiais',
  templateUrl: './filiais.component.html',
  styleUrls: ['./filiais.component.css']
})
export class FiliaisComponent implements OnInit {
  cadastro: any;
  corpo: Filiais;
  filiais:any = [];
  nome:any;
  d:any;
  b:any;
  c:any;
  constructor(public cadastroService: CadastrosService) { 
    this.cadastro = [];
    this.corpo = new Filiais;
  } 

  ngOnInit() {
    this.gettodasfiliais();
    this.pesquisafilial();
  }
 
  gettodasfiliais() {
    //Get saved list of students
    this.cadastroService
    .getFiliais()
    .subscribe(data => {
       this.filiais = data;
      console.log(this.filiais)
      },
       error =>{
       console.error(error);})
  } 
 
  pesquisafilial(){
    this.cadastroService.pesquisafilial(this.corpo).subscribe(response => {
      this.filiais = Object.values(response);
       this.filiais = this.filiais[3];
       
    })
  }
 
  a(a){
    console.log(a)
    this.nome = a;
    
  }
  
  ativa(id){
    this.cadastroService.filialativa(id).subscribe(Response=>{
      this.gettodasfiliais();
      this.d = true;
      
        setTimeout(function() {
          $('#d').fadeOut('fast');
          
       }, 500);
    })
  }   
 
  desativa(id){
    this.cadastroService.filialdesativa(id).subscribe(Response=>{
      this.gettodasfiliais();
      
      this.c = true;
        setTimeout(function() {
          $('#d').fadeOut('fast');
          
       },500);
       console.log(this.c);
      })
  }


}
