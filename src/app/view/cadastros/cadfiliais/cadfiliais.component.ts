import { Component, OnInit } from '@angular/core';
import { CadastrosService } from 'src/app/domain/services/cadastros.service';
import { Filiais } from 'src/app/domain/model/filiais';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadfiliais',
  templateUrl: './cadfiliais.component.html',
  styleUrls: ['./cadfiliais.component.css']
})
export class CadfiliaisComponent implements OnInit {
  cadastro: any;
  corpo: Filiais;
  sucesso:any;
  registerForm: FormGroup;
    submitted = false;

  constructor(public cadastroService: CadastrosService, private formBuilder: FormBuilder) {
    this.cadastro = [];
    this.corpo = new Filiais;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required]
  });
  } 
  salvardados(){
    this.cadastroService.createFiliais(this.corpo).subscribe(Response=>{
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

      this.cadastroService.createFiliais(this.registerForm.value).subscribe(Response=>{
        this.sucesso = true;
        setTimeout(function() {
          $('#sucesso').fadeOut('fast');
       }, 2000);
      }) 
     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }


}
