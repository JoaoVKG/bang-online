import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Carta } from '../../shared/carta.model';
import { Naipe } from '../../shared/naipe.enum';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit, AfterViewInit {
  deck: Carta[] = [
    new Carta('bang!', 'assets/img/bang_fixed.png', '','bang', Naipe.OUROS, 'A', 0),
    new Carta('esquiva!', 'assets/img/esquiva_fixed.png', '','esquiva', Naipe.PAUS, 'A', 0),
    new Carta('esquiva!', 'assets/img/esquiva_fixed.png', '','esquiva', Naipe.PAUS, 'A', 0),
    new Carta('esquiva!', 'assets/img/esquiva_fixed.png', '','esquiva', Naipe.PAUS, 'A', 0),
    new Carta('esquiva!', 'assets/img/esquiva_fixed.png', '','esquiva', Naipe.PAUS, 'A', 0),
    new Carta('esquiva!', 'assets/img/esquiva_fixed.png', '','esquiva', Naipe.PAUS, 'A', 0),
    new Carta('esquiva!', 'assets/img/esquiva_fixed.png', '','esquiva', Naipe.PAUS, 'A', 0),
    new Carta('duelo', 'assets/img/duelo_fixed.png', '','duelo', Naipe.ESPADAS, 'Q', 0)
  ];

  @Output() atualizarCemiterio: EventEmitter<Carta> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
   this.posicionarCartas();
  }

  

  posicionarCartas() {
    let deck_el = document.getElementById('deck-el');
    let cartas = deck_el.children;
    let width = cartas[0].getBoundingClientRect().width;
    let contador_left = 0;
    let contador_bottom = 0;
    let width_total = 0;
    for (let i = 0; i < cartas.length; i++) {
      if(i == cartas.length - 1)
        width_total = width_total + width;
      else
        width_total = width_total + ((width+5)*2/cartas.length > 95 ? (width+5)*2/cartas.length : 95);
    }
    contador_left = window.innerWidth/2 - width_total/2;
    for (let i = 0; i < cartas.length; i++) {
      cartas[i].setAttribute('style', 'margin-bottom: ' + contador_bottom + 'px; margin-left: ' + contador_left + 'px');
      contador_left = contador_left + ((width+5)*2/cartas.length > 95 ? (width+5)*2/cartas.length : 95);
      contador_bottom = contador_bottom + 1;
    }
  }

  selecionarCarta(indice) {
    this.atualizarCemiterio.emit(this.deck[indice]);
    this.deck.splice(indice, 1);
    setTimeout(() => {
      this.posicionarCartas();
    }, 0);
  }

}
