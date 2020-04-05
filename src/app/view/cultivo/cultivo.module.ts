import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafraComponent } from './safra/safra.component';
import { ContratoComponent } from './contrato/contrato.component';
import { CultivoRoutingModule } from './cultivo-routing.module';
import {TableModule} from 'primeng/table';
import { CadsafraComponent } from './cadsafra/cadsafra.component';
import { CadcontratoComponent } from './cadcontrato/cadcontrato.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
 
export var options: Partial<IConfig> | (() => Partial<IConfig>);





@NgModule({
  declarations: [SafraComponent, ContratoComponent, CadsafraComponent, CadcontratoComponent],
  
  imports: [
    CommonModule,
    CultivoRoutingModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(options)
   
  ]
})
export class CultivoModule { }
