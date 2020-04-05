import { Component, OnInit } from '@angular/core';
import { Formularios } from 'src/app/domain/model/formularios';
import { ActivatedRoute } from "@angular/router";
import { FormularioService } from 'src/app/domain/services/formulario.service';


@Component({
  selector: 'app-editformulario',
  templateUrl: './editformulario.component.html',
  styleUrls: ['./editformulario.component.css']
})
export class EditformularioComponent implements OnInit {
  corpo: Formularios;
  cadastro: any;
  sucesso:any;
  constructor(public formularioService: FormularioService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.corpo = new Formularios;
    this.buscarformulario();
  }

  buscarformulario(){

  }

  editarformulario(){
    
  }
  

} 
