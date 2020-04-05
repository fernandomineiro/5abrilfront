import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/domain/services/formulario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadformulario',
  templateUrl: './cadformulario.component.html',
  styleUrls: ['./cadformulario.component.css']
})
export class CadformularioComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(public formularioService: FormularioService, private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      tema: ['', Validators.required],
      pergunta: ['', Validators.required],
      
  }); 
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    } 
  
   this.formularioService.createFormulario(this.registerForm.value).subscribe(response=>{
      console.log(response)
    })
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

}
