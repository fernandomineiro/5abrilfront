import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from '../view-routing.module';

import { TemplateComponent } from './template.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [TemplateComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, ViewRoutingModule],
  exports: [TemplateComponent]
})
export class TemplateModule {}
