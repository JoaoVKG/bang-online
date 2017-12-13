import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartaComponent } from './components/carta/carta.component';
import { MesaComponent } from './components/mesa/mesa.component';
import { DeckComponent } from './components/deck/deck.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    MesaComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
