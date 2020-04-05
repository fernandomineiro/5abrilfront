import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/domain/services/formulario.service';
import { Informacao } from 'src/app/domain/model/informacao';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadinformacao',
  templateUrl: './cadinformacao.component.html',
  styleUrls: ['./cadinformacao.component.css']
})
export class CadinformacaoComponent implements OnInit {
  cadastro: any;
  corpo: Informacao;
  informacao:any = [];
  registerForm: FormGroup;
  sucesso:any;
    submitted = false;

  constructor(public formularioService: FormularioService, private formBuilder: FormBuilder) { 
    this.cadastro = [];
    this.corpo = new Informacao;
  } 

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      posicao: ['', Validators.required]
  });
  }

  salvardados(){
    
  } 

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      
      this.formularioService.createInformacao(this.registerForm.value).subscribe(response=>{
        this.sucesso = true;
      setTimeout(function() {
        $('#sucesso').fadeOut('fast');
     }, 2000);
      })
      // display form values on success
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  } 
}
