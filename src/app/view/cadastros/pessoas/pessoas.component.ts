import { Component, OnInit } from '@angular/core';
import { CadastrosService } from 'src/app/domain/services/cadastros.service';
import { Pessoas } from 'src/app/domain/model/pessoas';


@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  cadastro: any;
  corpo: Pessoas;
  nome:any;
  pessoas:any = [];
  constructor(public cadastroService: CadastrosService) {
    this.cadastro = [];
    this.corpo = new Pessoas;
   }

  ngOnInit() {
    this.gettodasPesssoas();
    this.pesquisapessoa();
  }
  gettodasPesssoas() {
   
    this.cadastroService
    .getPessoas() 
    .subscribe(data => {
      this.pessoas = Object.values(data);
      this.pessoas = this.pessoas[3];
      console.log(this.pessoas)
      },
       error =>{
       console.error(error);})
  } 
 
  pesquisapessoa(){
    this.cadastroService.pesquisapessoa(this.corpo).subscribe(response=>{
      this.pessoas = Object.values(response);
       this.pessoas = this.pessoas[3];

    })
    
  }

  a(a){
    console.log(a)
    this.nome = a;
    
  }

  ativa(id){
    this.cadastroService.pessoaativa(id).subscribe(Response=>{
      this.gettodasPesssoas();
      
    })
  }  

  desativa(id){
    this.cadastroService.pessoadesativa(id).subscribe(Response=>{
      this.gettodasPesssoas();
      
      })
  }


}
