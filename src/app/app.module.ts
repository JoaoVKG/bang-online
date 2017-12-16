import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartaComponent } from './components/carta/carta.component';
import { MesaComponent } from './components/mesa/mesa.component';
import { DeckComponent } from './components/deck/deck.component';
import { JogadorComponent } from './components/jogador/jogador.component';
import { ModalcardComponent } from './components/modalcard/modalcard.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    MesaComponent,
    DeckComponent,
    JogadorComponent,
    ModalcardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
