import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CadmenuComponent } from './cadmenu/cadmenu.component';
import { CadperfilComponent } from './cadperfil/cadperfil.component';
import { CadusuarioComponent } from './cadusuario/cadusuario.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { EditperfilComponent } from './editperfil/editperfil.component';
import { EditusuarioComponent } from './editusuario/editusuario.component';




const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
    resolve: {}
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    resolve: {}
  },
  {
    path: 'usuario',
    component: UsuariosComponent,
    resolve: {}
  },
  {
    path: 'cadastro-menu',
    component: CadmenuComponent,
    resolve: {}
  },
  {
    path: 'cadastro-perfil',
    component: CadperfilComponent,
    resolve: {}
  },
  {
    path: 'cadastro-usuario',
    component: CadusuarioComponent,
    resolve: {}
  },
  {
    path: 'edita-menu/:id',
    component: EditmenuComponent,
    resolve: {}
  },
  {
    path: 'edita-perfil/:id',
    component: EditperfilComponent,
    resolve: {}
  },
  {
    path: 'edita-usuario/:id',
    component: EditusuarioComponent,
    resolve: {}
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracoesRoutingModule {}
