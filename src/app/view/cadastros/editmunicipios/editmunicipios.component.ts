import { Component, OnInit } from '@angular/core';
import { CadastrosService } from 'src/app/domain/services/cadastros.service';
import { Municipios } from 'src/app/domain/model/municipios';
import { ActivatedRoute } from "@angular/router";
 
@Component({
  selector: 'app-editmunicipios',
  templateUrl: './editmunicipios.component.html',
  styleUrls: ['./editmunicipios.component.css']
})
export class EditmunicipiosComponent implements OnInit {
  cadastro: any;
  corpo: Municipios;
  sucesso:any;
  m: any;
  id:any; 
  ma:any;
  nome:any;
  estado:any;
  a:any;
  as:any
  estados:any;
  rere:any;
  constructor(public cadastroService: CadastrosService, private route: ActivatedRoute) { 
    this.cadastro = [];
  this.corpo = new Municipios;
  this.route.params.subscribe(params => this.id = params['id']);
  this.corpo.estado = this.rere;
  
  }
  
  ngOnInit() {
    this.getestados();
    this.buscamenu();
    
  }
   
  getestados(){
    this.cadastroService.getEstado().subscribe(response =>{
      this.route.params.subscribe(params => this.as = params['id']);
      console.log(response);
      this.a=response;

     // this.a = response;
     // this.ma = Object.values(response);
     // this.ma = this.ma[3];
     // console.log(this.ma);
      //this.nome = this.ma.nome;
      //this.corpo.estado  = this.ma.id_estado;
      //this.corpo.estado = this.as;

    }) 
  }

  

  buscamenu(){
    this.route.params.subscribe(params => this.id = params['id']);
    this.corpo.id_municipio = this.id;
    this.cadastroService.pesquisadamunicipio(this.corpo).subscribe(response => {
    // console.log(response);
     this.ma = Object.values(response);
     this.ma = this.ma[3];
     //this.corpo.nome= response['nome'];
     console.log(this.ma);
     this.corpo.nome = this.ma[0].nome;
     this.rere = this.ma[0].id_estado; 
     this.corpo.estado = this.rere;
     console.log(this.corpo.nome);
     console.log(this.corpo.estado);
     this.rere =this.corpo.estado;
    })
  }

  salvardados(){
    console.log(this.corpo.nome);
    console.log(this.corpo.estado);
    this.cadastroService.createMunicipios(this.corpo).subscribe(response=>{
      this.sucesso = true;
    setTimeout(function() {
      $('#sucesso').fadeOut('fast');
      window.location.href = "http://localhost:4200/#/sistema/cadastros/municipios";
   }, 2000);
    })
  }
 

}
