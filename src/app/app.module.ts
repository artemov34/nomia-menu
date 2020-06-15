import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { ClickOutsideDirective } from './shared/directive/clickOutside.directive';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, MenuComponent, MenuItemComponent, MenuFormComponent, ClickOutsideDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
