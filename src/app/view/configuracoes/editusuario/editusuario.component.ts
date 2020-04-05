import { Component, OnInit } from '@angular/core';
import { ConfiguracoesService } from 'src/app/domain/services/configuracoes.service';
import { Usuarios } from 'src/app/domain/model/usuarios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent implements OnInit {
  corpo: Usuarios;
  a:any
  b:any;
  z:any;
  pessoaa: any[] = []; 
  pessoac: any[] = [];
  parede: any;
  registerForm: FormGroup;
  submitted = false;
  id:any;
  ma:any;
  constructor(private route: ActivatedRoute,public configuracoesService: ConfiguracoesService, private formBuilder: FormBuilder) { 
    this.corpo = new Usuarios();
    
  } 
 
  ngOnInit() {
    this.pegarperfil();
    this.pegarpessoa();
    this.buscausuario();
  }

  pegarpessoa(){
    this.configuracoesService.getPessoa().subscribe(response=>{
      this.a = Object.values(response);
      this.a = this.a[3];
      console.log(this.a);
      this.pessoaa = this.a;
      this.pessoac = [];
    })

  }

  pegarperfil(){
    this.configuracoesService.getPerfil().subscribe(response=>{
      this.b=response;
      console.log(this.b);
    })
  }
 
  salvardados(){
    console.log(this.corpo.login);
    console.log(this.corpo.senha);
    console.log(this.corpo.perfil);
    console.log(this.corpo.pessoa);
  }

  add(){
    console.log(this.corpo.id);

    for(var i =0; i<= this.pessoaa.length; i++){
        
    }
   // this.parede = this.pessoaa[this.corpo.id];
    //this.pessoac.push(this.parede);

  }

  addtodos(){
    this.pessoac = this.pessoaa;
    this.pessoaa = [];
    console.log(this.pessoac);
    console.log(this.pessoaa);
    
  }

  remove(i){
    console.log(this.corpo.id);

  }

  removetodos(){
    this.pessoaa = this.pessoac;
    this.pessoac = [];
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  buscausuario(){
    this.route.params.subscribe(params => this.id = params['id']);
    this.corpo.id_usuario = this.id;
    this.configuracoesService.pesquisadausuario(this.corpo).subscribe(response=>{
      this.ma = Object.values(response);
      this.ma = this.ma[3];
      console.log(this.ma);
      this.corpo.login = this.ma[0].login; 
      this.corpo.perfil = this.ma[0].id_perfil; 
      this.corpo.pessoa = this.ma[0].id_pessoa; 
    })
    
  }

 
}
