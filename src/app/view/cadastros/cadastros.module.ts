import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosComponent } from './estados/estados.component';
import { MunicipiosComponent } from './municipios/municipios.component';
import { FiliaisComponent } from './filiais/filiais.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import {TableModule} from 'primeng/table';
import { SimpleNotificationsModule } from 'angular2-notifications'; 
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CadfiliaisComponent } from './cadfiliais/cadfiliais.component';
import { CadmunicipiosComponent } from './cadmunicipios/cadmunicipios.component';
import { CadpropriedadesComponent } from './cadpropriedades/cadpropriedades.component';
import { EditfiliaisComponent } from './editfiliais/editfiliais.component';
import { EditmunicipiosComponent } from './editmunicipios/editmunicipios.component';
import { CadpessoasComponent } from './cadpessoas/cadpessoas.component';
import { EditpessoasComponent } from './editpessoas/editpessoas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
export var options: Partial<IConfig> | (() => Partial<IConfig>);






@NgModule({
  declarations: [EstadosComponent, MunicipiosComponent, FiliaisComponent, PessoasComponent, PropriedadesComponent, CadfiliaisComponent,
    CadmunicipiosComponent,CadpropriedadesComponent, EditfiliaisComponent, EditmunicipiosComponent, CadpessoasComponent, EditpessoasComponent],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    SimpleNotificationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
    
  ]
})
export class CadastrosModule { }
