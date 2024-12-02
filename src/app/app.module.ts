import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinanzasComponent } from './finanzas/finanzas.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FinanzasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
