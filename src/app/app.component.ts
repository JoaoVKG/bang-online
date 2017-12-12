import { Component } from '@angular/core';
import { Carta } from './shared/carta.model';
import { Naipe } from './shared/naipe.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartas: Carta[] = [
    new Carta('PEI', '', '','bang', Naipe.COPAS, 2, 0),
    new Carta('POW', '', '','bang', Naipe.PAUS, 9, 0)
  ]
}
