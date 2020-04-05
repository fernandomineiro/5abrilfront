import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/domain/services/formulario.service';
import { Grupo } from 'src/app/domain/model/grupo';

@Component({
  selector: 'app-cadgrupo',
  templateUrl: './cadgrupo.component.html',
  styleUrls: ['./cadgrupo.component.css']
})
export class CadgrupoComponent implements OnInit {
  cadastro: any;
  corpo: Grupo;  
  informacao:any;
  constructor(public formularioService: FormularioService) { 
    this.cadastro = [];
    this.corpo = new Grupo;
  }

  ngOnInit() {
    this.gettodosgrupo()
  }

  gettodosgrupo(){
    this.formularioService
    .getInformacao()
    .subscribe(data => {
       
      this.informacao =data;
      console.log(this.informacao);
      },
       error =>{
       console.error(error);})
  }

}
