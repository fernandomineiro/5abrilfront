import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentosComponent } from './atendimentos/atendimentos.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { GrupoComponent } from './grupo/grupo.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { CadinformacaoComponent } from './cadinformacao/cadinformacao.component';
import { EditinformacaoComponent } from './editinformacao/editinformacao.component';
import { CadgrupoComponent } from './cadgrupo/cadgrupo.component';
import { CadformularioComponent } from './cadformulario/cadformulario.component';
import { EditformularioComponent } from './editformulario/editformulario.component';



const routes: Routes = [
  {
    path: 'informacao',
    component: InformacaoComponent,
    resolve: {}
  },
  {
    path: 'grupo',
    component: GrupoComponent,
    resolve: {}
  },
  {
    path: 'formulario',
    component: FormulariosComponent,
    resolve: {}
  },
  {
    path: 'atendimento',
    component: AtendimentosComponent,
    resolve: {}
  },
  {
    path: 'atendimento',
    component: AtendimentosComponent,
    resolve: {}
  },
  {
    path: 'cadastro-informacao',
    component: CadinformacaoComponent,
    resolve: {}
  },
  {
    path: 'cadastro-grupo',
    component: CadgrupoComponent ,
    resolve: {}
  },
  {
    path: 'editar-imformacao/:id',
    component: EditinformacaoComponent,
    resolve: {}
  },
  {
    path: 'cadastro-formulario',
    component: CadformularioComponent ,
    resolve: {}
  },
  {
    path: 'editar-formulario/:id',
    component: EditformularioComponent,
    resolve: {}
  }

  
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule {}
