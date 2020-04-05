import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CultivoService } from 'src/app/domain/services/cultivo.service';


@Component({ 
  selector: 'app-cadsafra',
  templateUrl: './cadsafra.component.html',
  styleUrls: ['./cadsafra.component.css']
})
export class CadsafraComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, public cultivoService: CultivoService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      inicio: ['', Validators.required],
      termino: ['', Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
       this.cultivoService.createSafra(this.registerForm.value).subscribe(response=>{
          console.log(response);
        }) 

        // display form values on success
       //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
}
