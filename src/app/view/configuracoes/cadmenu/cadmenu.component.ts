import { Component, OnInit } from '@angular/core';
import { ConfiguracoesService } from 'src/app/domain/services/configuracoes.service';
import { Menu } from 'src/app/domain/model/menu';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-cadmenu',
  templateUrl: './cadmenu.component.html',
  styleUrls: ['./cadmenu.component.css']
})
export class CadmenuComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  cadastro: any;
  salvar: any;
  menu:any = []; 
  id_menu:any;
  nome:any;
  corpo: Menu;
  diretorio: any;
  t: any;
  meu: any; 
  sucesso: any;
  constructor(public configuracoesService: ConfiguracoesService, private formBuilder: FormBuilder) {
    this.cadastro = [];
    
   } 

  ngOnInit() {
    this.gettodosmenus();
    this.redelete();

    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      roler_menu: ['', Validators.required],
      diretorio: ['', Validators.required]
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.configuracoesService.createMenu(this.registerForm.value).subscribe(Response=>{
        this.sucesso = true;
        setTimeout(function() {
          $('#sucesso').fadeOut('fast');
       }, 2000);
      }) 
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
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
  redelete(){
    return this.salvar;
    return this.id_menu;

  }  
  salvardados(){
    this.configuracoesService.createMenu(this.corpo).subscribe(Response=>{
      this.sucesso = true;
      setTimeout(function() {
        $('#sucesso').fadeOut('fast');
     }, 2000);
    }) 
  }
}
