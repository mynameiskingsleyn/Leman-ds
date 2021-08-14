import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { I18nService } from './shared/service/i18n.service';
import { HelmetService } from './shared/service/helmet.service';

import { AppComponent } from './app.component';
import { HelmetComponent } from './helmet/helmet.component';
import { HelmetListComponent } from './helmet/helmet-list/helmet-list.component';
import { HelmetItemComponent } from './helmet/helmet-list/helmet-item/helmet-item.component';


@NgModule({
  declarations: [
     AppComponent,
     HelmetComponent,
     HelmetListComponent,
     HelmetItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [I18nService, HelmetService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
