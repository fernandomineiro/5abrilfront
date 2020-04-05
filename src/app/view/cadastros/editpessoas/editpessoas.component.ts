import { Component, OnInit } from '@angular/core';
import { CadastrosService } from 'src/app/domain/services/cadastros.service';
import { Pessoas } from 'src/app/domain/model/pessoas';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editpessoas',
  templateUrl: './editpessoas.component.html',
  styleUrls: ['./editpessoas.component.css']
})
export class EditpessoasComponent implements OnInit {
id:any;
corpo: Pessoas;
cadastro: any;
ma:any;
m:any;
c: any;
produtor:any;
administrador:any;
consultor:any;
sucesso:any;
  constructor(public cadastroService: CadastrosService, private route: ActivatedRoute) {
    this.corpo = new Pessoas;
    this.cadastro = [];
    
    

   }
  
  ngOnInit() {
    this.getpessoas();
    this.getmunicipio();
  }
  
  getpessoas(){
    this.route.params.subscribe(params => this.id = params['id']);
    this.corpo.id_pessoa = this.id;
    this.cadastroService.pesquisadapessoa(this.corpo).subscribe(response=>{
      this.ma = Object.values(response);
     this.ma = this.ma[3];
     console.log(this.ma);
     this.corpo.nome = this.ma[0].nome;
     console.log(this.corpo.nome);
     this.corpo.celular = this.ma[0].celular;
     this.corpo.cpf = this.ma[0].cpf;
     this.corpo.email = this.ma[0].email; 
     this.corpo.telefone = this.ma[0].telefone;
     this.corpo.bairro = this.ma[0].bairro;
     this.corpo.crea = this.ma[0].crea;
     this.corpo.endereco = this.ma[0].endereco;
     this.corpo.produtor = this.ma[0].produtor;
     this.produtor = this.ma[0].produtor;
     this.administrador = this.ma[0].administrador;
     this.consultor = this.ma[0].consultor;
     this.corpo.administrador = this.ma[0].administrador;
     this.corpo.consultor = this.ma[0].consultor;
     this.corpo.municipio = this.ma[0].id_municipio;
    })
  } 
 
  getmunicipio(){
    this.cadastroService.getMunicipios().subscribe(response=>{
      this.m = Object.values(response);
     this.m = this.m[3];
    })
  }

  salvardados(){
    
    this.cadastroService.updatePessoas(this.corpo).subscribe(response=>{
      //this.sucesso = true;
    setTimeout(function() { 
      this.sucesso = true; 
      $('#sucesso').fadeOut('fast');
      window.location.href = "http://localhost:4200/#/sistema/cadastro/pessoas";
   }, 500); 
    })
  }

}
