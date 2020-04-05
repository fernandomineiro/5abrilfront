import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoComponent } from './contrato/contrato.component';
import { SafraComponent } from './safra/safra.component';
import { CadcontratoComponent } from './cadcontrato/cadcontrato.component';
import { CadsafraComponent } from './cadsafra/cadsafra.component';


const routes: Routes = [
  {
    path: 'contrato',
    component: ContratoComponent,
    resolve: {}
  },
  {
    path: 'safra',
    component: SafraComponent,
    resolve: {}
  },
  {
    path: 'cadastro-safra',
    component: CadsafraComponent,
    resolve: {}
  },
  {
    path: 'cadastro-contrato',
    component: CadcontratoComponent,
    resolve: {}
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CultivoRoutingModule {}
