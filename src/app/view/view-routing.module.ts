import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'cadastro',
        loadChildren: './cadastros/cadastros.module#CadastrosModule'
      },
      {
        path: 'configuracao',
        loadChildren: './configuracoes/configuracoes.module#ConfiguracoesModule'
      },
      {
        path: 'cultivo',
        loadChildren: './cultivo/cultivo.module#CultivoModule'
      },
      {
        path: 'formulario',
        loadChildren: './formulario/formulario.module#FormularioModule'
      },
      {
        path: 'relatorio',
        loadChildren: './relatorio/relatorio.module#RelatorioModule'
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
