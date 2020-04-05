import { Component, OnInit } from '@angular/core';
import { CadastrosService } from 'src/app/domain/services/cadastros.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadpessoas',
  templateUrl: './cadpessoas.component.html',
  styleUrls: ['./cadpessoas.component.css']
})
export class CadpessoasComponent implements OnInit {
  m: any;
  registerForm: FormGroup;
  submitted = false;
  sucesso:any;
  constructor(public cadastroService: CadastrosService, private formBuilder: FormBuilder) { }
 
  ngOnInit() {
     
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      municipio: ['', Validators.required],
      telefone: ['', Validators.required],
      celular: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      crea: ['', Validators.required],
      consultor: ['', ],
      administrador: ['', ],
      produtor: ['',]
      
  }); 
  this.getmunicipios();
  } 
  getmunicipios(){
    this.cadastroService.getMunicipios().subscribe(response =>{
      this.m = Object.values(response);
       this.m = this.m[3];
    }) 
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    } 
    if(this.registerForm.value.consultor != true){
      this.registerForm.value.consultor = "false";
    }
    else{
      this.registerForm.value.consultor = "true";
    }
    if(this.registerForm.value.administrador != true){
      this.registerForm.value.administrador = "false";
    }
    else{
      this.registerForm.value.administrador = "true";
    }
    if(this.registerForm.value.produtor != true){
      this.registerForm.value.produtor = "false";
    }
    else{ 
      this.registerForm.value.produtor = "true";
    }
    this.cadastroService.createPessoas(this.registerForm.value).subscribe(response=>{
      this.sucesso = true;
      setTimeout(function() {
        $('#sucesso').fadeOut('fast');
     }, 2000);
    })
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}
}
