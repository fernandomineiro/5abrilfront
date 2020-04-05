import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CadastrosService } from 'src/app/domain/services/cadastros.service';
import { Filiais } from 'src/app/domain/model/filiais';


@Component({
  selector: 'app-editfiliais',
  templateUrl: './editfiliais.component.html',
  styleUrls: ['./editfiliais.component.css']
})
export class EditfiliaisComponent implements OnInit {
  corpo: Filiais;
  cadastro: any;
  id:any;
  ma:any;
  nome:any;
  sucesso:any;
  constructor(public cadastroService: CadastrosService, private route: ActivatedRoute) { 
    this.cadastro = [];
    this.corpo = new Filiais;
  }

  ngOnInit() {
    this.buscarfilial();
  }

  buscarfilial(){
    this.route.params.subscribe(params => this.id = params['id']);
    this.corpo.id_filial = this.id;
    this.cadastroService.pesquisadafilial(this.corpo).subscribe(response => {
      this.ma = Object.values(response);
      this.ma = this.ma[3];
      console.log(this.ma);
      this.nome = this.ma[0].nome;
    })
    
  }

  editarfilial(){
    console.log(this.corpo.id_filial);
    if(!this.corpo.nome){
      this.corpo.nome = this.nome;
    }

    this.cadastroService.updateFiliais(this.corpo).subscribe(response =>{
      this.sucesso = true;
    setTimeout(function() {
      $('#sucesso').fadeOut('fast');
   }, 2000);
    }) 
    
  }

}
