import { Component, OnInit } from '@angular/core';
import { ConfiguracoesService } from 'src/app/domain/services/configuracoes.service';
import { Perfil } from 'src/app/domain/model/perfil';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadperfil',
  templateUrl: './cadperfil.component.html',
  styleUrls: ['./cadperfil.component.css']
})
export class CadperfilComponent implements OnInit {
  cadastro: any;
  sucesso:any;

  registerForm: FormGroup;
    submitted = false;

  perfil:any = [];
  salvar: any;
  id_perfil: any;
  t:any;
  meu:any = [];
  corpo: Perfil;
  nome:any;
  tipopermissao:any;
  constructor(public configuracoesService: ConfiguracoesService, private formBuilder: FormBuilder) { 
    this.cadastro = [];
    this.corpo = new Perfil;
  }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      tipopermissao: ['', Validators.required]
  },);
  }
 
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.configuracoesService.createPerfil(this.registerForm.value).subscribe(Response => {
        this.sucesso = true;
        setTimeout(function() {
          $('#sucesso').fadeOut('fast');
       }, 2000);
      })

      // display form values on success
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }


  salvardados(){
    this.configuracoesService.createPerfil(this.corpo).subscribe(Response => {
      this.sucesso = true;
      setTimeout(function() {
        $('#sucesso').fadeOut('fast');
     }, 2000);
    })
  } 

}
