import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

import { ParticlesModule } from 'angular-particle';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { LogoutComponent } from './logout/logout.component';

const primeNgModules = [
  CardModule,
  ButtonModule,
  InputTextModule,
  DropdownModule
];
const ngZorroModules = [NzTabsModule];

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    primeNgModules,
    ParticlesModule,
    ngZorroModules
  ],
  exports: [LoginComponent, LogoutComponent]
})
export class LoginModule {}
