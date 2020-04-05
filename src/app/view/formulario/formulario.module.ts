import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacaoComponent } from './informacao/informacao.component';
import { GrupoComponent } from './grupo/grupo.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { AtendimentosComponent } from './atendimentos/atendimentos.component';
import { FormularioRoutingModule } from './formulario-routing.module';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CadinformacaoComponent } from './cadinformacao/cadinformacao.component';
import { EditinformacaoComponent } from './editinformacao/editinformacao.component';
import { CadgrupoComponent } from './cadgrupo/cadgrupo.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CadformularioComponent } from './cadformulario/cadformulario.component';
import { EditformularioComponent } from './editformulario/editformulario.component';




@NgModule({
  declarations: [InformacaoComponent, GrupoComponent, FormulariosComponent, 
    AtendimentosComponent, CadinformacaoComponent, EditinformacaoComponent, CadgrupoComponent, CadformularioComponent, EditformularioComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class FormularioModule { }
