import { Component, OnInit } from '@angular/core';
import { ConfiguracoesService } from 'src/app/domain/services/configuracoes.service';
import { Menu } from 'src/app/domain/model/menu';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
}) 
export class EditmenuComponent implements OnInit {
  corpo: Menu;
  cadastro: any; 
  id:any;
  ma:any;
  nome:any;
  diretorio: any;
  role_menu: any; 
  m: any;
  sucesso:any;
  e:any; 
  constructor(public configuracoesService: ConfiguracoesService,private route: ActivatedRoute) { 
    this.cadastro = [];
    this.corpo = new Menu;
    this.route.params.subscribe(params => this.id = params['id']);
    this.corpo.role_menu = this.id;;

  } 

  ngOnInit() {
    this.buscamenu();
    this.gettodosmenus()
  } 
  gettodosmenus() {
    
    this.configuracoesService
    .getMenu()
    .subscribe(data => {
       this.m = data;
      console.log(this.m)
      },
       error =>{
       console.error(error);})
  } 
   
  
  buscamenu(){
    this.route.params.subscribe(params => this.id = params['id']);
    this.corpo.id_menu = this.id;
    this.configuracoesService.pesquisadamenu(this.corpo).subscribe(response => {
      this.ma = Object.values(response);
      this.ma = this.ma[3];
      console.log(this.ma);
      this.nome = this.ma[0].nome;
      this.diretorio = this.ma[0].diretorio;
      this.role_menu = this.id;
      console.log(this.id);
      
    })
  }

  editarmenu(){
    console.log(this.corpo.id_menu);
   if(!this.corpo.nome){
     this.corpo.nome = this.nome;
   }
   if(!this.corpo.role_menu){
    this.corpo.role_menu = this.role_menu;
  }
   if(!this.corpo.diretorio){
     this.corpo.diretorio = this.diretorio;
   } 
   this.configuracoesService.updateMenu(this.corpo).subscribe(response=>{
    this.sucesso = true;
    setTimeout(function() {
      $('#sucesso').fadeOut('fast');
      window.location.href = "http://localhost:4200/#/sistema/configuracao/menu";
   }, 1000);
  
  })


  
  }
   
}
