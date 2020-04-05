import { Component, OnInit } from '@angular/core';
import { CadastrosService } from 'src/app/domain/services/cadastros.service';
import { Municipios } from 'src/app/domain/model/municipios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({ 
  selector: 'app-cadmunicipios',
  templateUrl: './cadmunicipios.component.html',
  styleUrls: ['./cadmunicipios.component.css']
})
export class CadmunicipiosComponent implements OnInit {
  cadastro: any;
  corpo: Municipios;
  sucesso:any;
  m: any;
  registerForm: FormGroup;
    submitted = false;
  constructor(public cadastroService: CadastrosService, private formBuilder: FormBuilder) { 
    this.cadastro = [];
    this.corpo = new Municipios;
    this.corpo.estado = '1';
  }

  ngOnInit() {
    this.getestados();
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      estado: ['', Validators.required]
  }); 
  }
  
  getestados(){
    this.cadastroService.getEstado().subscribe(response =>{
      this.m = response;
      console.log(this.m);
      
    }) 
  }

  salvardados(){
    this.cadastroService.createMunicipios(this.corpo).subscribe(response=>{
      this.sucesso = true;
      setTimeout(function() {
        $('#sucesso').fadeOut('fast');
     }, 2000);
    })
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.cadastroService.createMunicipios(this.registerForm.value).subscribe(response=>{
          this.sucesso = true;
          setTimeout(function() {
            $('#sucesso').fadeOut('fast');
         }, 2000);
        })

       
       // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }


}
