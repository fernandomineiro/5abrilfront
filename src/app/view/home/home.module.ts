import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

const materialModules = [];
const primengModules = [];
const ngZorroModules = [];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ScrollingModule,
    ngZorroModules,
    primengModules,
    materialModules
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
