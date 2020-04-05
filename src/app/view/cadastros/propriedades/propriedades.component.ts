import { Component, OnInit } from '@angular/core';
import { CadastrosService } from 'src/app/domain/services/cadastros.service';


@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent implements OnInit {
  cadastro: any;
  t:any;
  z:any;
  a:any;
  meu:any = [];
  meo:any = [];
  mea:any = [];
  propriedades:any = [];
  municipios: any;
  desativado: any;
  constructor(public cadastroService: CadastrosService) { 
    this.cadastro = [];
   }

  ngOnInit() {
    this.gettodaspropriedades();
    this.gettodoestado();
    this.gettodofilial();
    this.gettodosMunicipios();
  }

  gettodaspropriedades() {
    
    this.cadastroService
    .getPropriedades()
    .subscribe(data => {
      this.propriedades = Object.values(data);
      this.propriedades = this.propriedades[3];
      console.log(this.propriedades)
      },
       error =>{
       console.error(error);})
  }
 
  gettodofilial(){
    this.cadastroService.getFiliais().subscribe(response => {
      console.log(response);
      this.t=response;
      for (let i = 0; i < this.t.length; i++) {
        this.meu.push(this.t[i].nome);
      }
    })
  console.log(this.meu);
  }

  gettodoestado(){
    this.cadastroService.getEstado().subscribe(response => {
      console.log(response);
      this.z=response;
      for (let i = 0; i < this.z.length; i++) {
        this.meo.push(this.z[i].nome);
      }
    })
  console.log(this.meo);
  }

  gettodosMunicipios() {
    //Get saved list of students
    this.cadastroService
    .getMunicipios()
    .subscribe(data => {
      this.municipios  = Object.values(data);
      this.municipios = this.municipios[3];
      console.log(this.municipios);
      this.a=this.municipios;
      for (let i = 0; i < this.a.length; i++) {
        this.mea.push(this.a[i].nome);
      }
      },
       error =>{
       console.error(error);})
  }

  ativar(id){
    this.cadastroService.ativa(id).subscribe(Response=>{
      this.gettodaspropriedades();
    })
  }

  desativar(id){
    this.cadastroService.desativaativa(id).subscribe(Response=>{
      this.desativado = true;
      setTimeout(function() {
        $('#teste').fadeOut('fast');
     }, 2000);
      this.gettodaspropriedades();
    })
  }


}
