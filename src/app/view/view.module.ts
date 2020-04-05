import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateModule } from './template/template.module';
import { HomeModule } from './home/home.module';
import { ViewRoutingModule } from './view-routing.module';
import { CadastrosModule } from './cadastros/cadastros.module';
import {ButtonModule} from 'primeng/button';



@NgModule({
  
  imports: [CommonModule, ViewRoutingModule, TemplateModule, HomeModule, CadastrosModule,ButtonModule]
})
export class ViewModule {}
