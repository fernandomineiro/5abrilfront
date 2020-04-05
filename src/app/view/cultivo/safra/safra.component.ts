import { Component, OnInit } from '@angular/core';
import { CultivoService } from 'src/app/domain/services/cultivo.service';
 
@Component({
  selector: 'app-safra',
  templateUrl: './safra.component.html',
  styleUrls: ['./safra.component.css']
})
export class SafraComponent implements OnInit {
  cadastro: any;
  salvar:any;
  id_safra:any;
  nome:any;
  safra:any = [];
  constructor(public cultivoService: CultivoService) { 
    this.cadastro = [];
  }

  ngOnInit() {
    this.gettodassafra();
  }

  gettodassafra(){
    this.cultivoService
    .getSafra()
    .subscribe(data => {
       this.safra = data;
      console.log(this.safra)
      },
       error =>{
       console.error(error);})
  }
 
  predelete(obj){
    this.salvar = obj.nome;
    this.id_safra = obj.id_safra;
    
  }
  redelete(){
    return this.salvar;
    return this.id_safra;
  }
  
  delete() {
    this.cultivoService.deleteSafra(this.id_safra).subscribe(Response => {
      
      this.gettodassafra();
    });
    console.log(this.id_safra);
  }

  a(a){
    console.log(a)
    this.nome = a;
    
  }

  
}
