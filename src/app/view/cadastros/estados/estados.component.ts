import { Component, OnInit } from '@angular/core';
import { CadastrosService } from 'src/app/domain/services/cadastros.service';
import { Estados } from 'src/app/domain/model/estados';
 

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {
  cadastro: any;
  corpo: Estados;
  estados = [];


  constructor(public cadastroService: CadastrosService) {
    this.cadastro = [];
    this.corpo = new Estados
   }

  ngOnInit() {
    this.gettodosestados();
  }

  gettodosestados() {
    //Get saved list of students
    this.cadastroService
    .getEstado()
    .subscribe(data => {
       this.estados = data; },
       error =>{
       console.error(error);})
  }


  pesquisaestado(){
    this.cadastroService.pesquisaestado(this.corpo).subscribe(response => {
      this.estados = Object.values(response);
       this.estados = this.estados[3];
       
    })
  }
 

}
