import { Component, OnInit, Output } from '@angular/core';
import { Carta } from '../../shared/carta.model';
import { Naipe } from '../../shared/naipe.enum';
import { Jogador } from '../../shared/jogador.model';
declare var $:any;
@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {
  jogadores: Jogador[];

  baralho: Carta[] = [
    new Carta('bang!', 'assets/img/bang_fixed.png', '','bang', Naipe.OUROS, 'A', 0),
    new Carta('esquiva!', 'assets/img/esquiva_fixed.png', '','esquiva', Naipe.PAUS, 'A', 0),
    new Carta('cerveja', 'assets/img/cerveja_fixed.png', '','cerveja', Naipe.COPAS, 'J', 0),
    new Carta('pânico!', 'assets/img/panico_fixed.png', '','panico', Naipe.OUROS, '8', 0),
    new Carta('cat balou', 'assets/img/catbalou_fixed.png', '','catbalou', Naipe.COPAS, 'K', 0)
  ];

  cemiterio: Carta[] = [];

  cartaComZoom: Carta;

  public atualizarCemiterio(carta: Carta): void {
    this.cemiterio.push(carta);
    console.log(this.cemiterio);
  }

  zoomNaCarta(carta: Carta) {
    console.log(carta);
    this.cartaComZoom = carta;
    $('#modalCard').modal('show');
  }

  constructor() { }

  ngOnInit() {
  }

}
