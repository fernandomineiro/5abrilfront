import { Component, OnInit } from '@angular/core';
import { CadastrosService } from 'src/app/domain/services/cadastros.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadpropriedades',
  templateUrl: './cadpropriedades.component.html',
  styleUrls: ['./cadpropriedades.component.css']
})
export class CadpropriedadesComponent implements OnInit {
  a:any;
  b:any; 
  c:any;
  registerForm: FormGroup;
  submitted = false;
  constructor(public cadastroService: CadastrosService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      municipio: ['', Validators.required],
      filial: ['', Validators.required],
      telefone: ['', Validators.required],
      atividade: ['', Validators.required],
      ha: ['', Validators.required],
      dap: ['', Validators.required],
      contratada: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      produtor: ['', Validators.required]
      
  });
    this.pegarmunicipio();
    this.pegarfilial();
    this.pegarprodutor();
   // this.registerForm.controls['municipio'].setValue(2, {onlySelf: true});
    
  }

  pegarmunicipio(){
    this.cadastroService.getMunicipios().subscribe(response=>{
      this.a = Object.values(response);
      this.a = this.a[3];
      console.log(this.a)
    })
  }
  

  pegarfilial(){
    this.cadastroService.getFiliais().subscribe(response=>{
      
      this.b = response;
    })
  }

  pegarprodutor(){
    this.cadastroService.getPessoas().subscribe(response=>{
      this.c = Object.values(response);
      this.c = this.c[3];
     console.log(this.c);
    })
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


}
