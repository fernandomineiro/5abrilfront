import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CadmenuComponent } from './cadmenu/cadmenu.component';
import { CadperfilComponent } from './cadperfil/cadperfil.component';
import { CadusuarioComponent } from './cadusuario/cadusuario.component';
import { EditusuarioComponent } from './editusuario/editusuario.component';
import { EditperfilComponent } from './editperfil/editperfil.component';
import { EditmenuComponent } from './editmenu/editmenu.component';





@NgModule({
  declarations: [MenuComponent, PerfilComponent, UsuariosComponent, CadmenuComponent, CadperfilComponent, CadusuarioComponent, EditusuarioComponent, EditperfilComponent, EditmenuComponent],
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class ConfiguracoesModule { }
