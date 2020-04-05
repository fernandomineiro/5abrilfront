import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData
} from '@angular/common';
import pt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, pt_BR } from 'ng-zorro-antd';
import { LoginModule } from './view/login/login.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ErrorComponent } from './error/error.component';



registerLocaleData(pt);

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    LoginModule,
    ProgressSpinnerModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
