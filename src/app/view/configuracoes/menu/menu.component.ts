import { Component, OnInit } from '@angular/core';
import { ConfiguracoesService } from 'src/app/domain/services/configuracoes.service';
import { Menu } from 'src/app/domain/model/menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
}) 
export class MenuComponent implements OnInit {
  cadastro: any;
  salvar: any; 
  menu:any = []; 
  id_menu:any;
  nome:any;
  corpo: Menu;
  diretorio: any;
  t: any;
  meu: any;
  
  constructor(public configuracoesService: ConfiguracoesService) {
    this.cadastro = [];
    this.corpo = new Menu;
    
   }
   

  ngOnInit() {
    this.gettodosmenus();
    this.redelete();
    
    
  }
  gettodosmenus() {
    
    this.configuracoesService
    .getMenu()
    .subscribe(data => {
       this.menu = data;
      console.log(this.menu)
      },
       error =>{
       console.error(error);})
  }

  predelete(obj){
    this.salvar = obj.nome;
    this.id_menu = obj.id_menu;
    this.nome = obj.nome; 
    this.diretorio = obj.diretorio;
  }
  redelete(){
    return this.salvar;
    return this.id_menu;

  } 
 
  delete() {
    this.configuracoesService.deleteMenu(this.id_menu).subscribe(Response => {
      
      this.gettodosmenus();
    });
    console.log(this.id_menu);
  } 
 
  salvardados(){
    this.configuracoesService.createMenu(this.corpo).subscribe(Response=>{
      window.location.reload()
    }) 
    //console.log(this.corpo.nome);
    //console.log(this.corpo.diretorio);
    //console.log(this.corpo.role_menu);
  }
 
  pesquisamenu(){
    this.configuracoesService.pesquisamenu(this.corpo).subscribe(response => {
      this.menu = Object.values(response);
       this.menu = this.menu[3];
    })
  }
 
  
  editarmenu(){
   
    this.corpo.id_menu = this.id_menu;
    this.configuracoesService.updateMenu(this.corpo).subscribe(Response=>{
      console.log(Response);
      window.location.reload();
    })
   
  }

  

 

}
