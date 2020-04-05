import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosComponent } from './estados/estados.component';
import { FiliaisComponent } from './filiais/filiais.component';
import { MunicipiosComponent } from './municipios/municipios.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { CadfiliaisComponent } from './cadfiliais/cadfiliais.component';
import { CadmunicipiosComponent } from './cadmunicipios/cadmunicipios.component';
import { CadpropriedadesComponent } from './cadpropriedades/cadpropriedades.component';
import { EditfiliaisComponent } from './editfiliais/editfiliais.component';
import { EditmunicipiosComponent } from './editmunicipios/editmunicipios.component';
import { CadpessoasComponent } from './cadpessoas/cadpessoas.component';
import { EditpessoasComponent } from './editpessoas/editpessoas.component';





const routes: Routes = [
  { path: '', redirectTo: 'propriedade', pathMatch: 'full' },
  {
    path: 'propriedade',
    component: PropriedadesComponent,
    resolve: {}
  },
  {
    path: 'estados',
    component: EstadosComponent,
    resolve: {}
  },
  {
    path: 'filiais',
    component: FiliaisComponent,
    resolve: {}
  },
  {
    path: 'municipios',
    component: MunicipiosComponent,
    resolve: {}
  },
  {
    path: 'pessoas',
    component: PessoasComponent,
    resolve: {}
  },
  {
    path: 'cadastro-filiais',
    component: CadfiliaisComponent,
    resolve: {}
  },
  {
    path: 'cadastro-municipios',
    component: CadmunicipiosComponent,
    resolve: {}
  },
  {
    path: 'cadastro-pessoas',
    component: CadpessoasComponent,
    resolve: {}
  },
  {
    path: 'cadastro-proriedades',
    component: CadpropriedadesComponent,
    resolve: {}
  },
  {
    path: 'editarfiliais/:id',
    component: EditfiliaisComponent,
    resolve: {}
  },
  {
    path: 'editarmunicipios/:id',
    component: EditmunicipiosComponent,
    resolve: {}
  },
  {
    path: 'editarpessoas/:id',
    component: EditpessoasComponent,
    resolve: {}
  },
 

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule {}
