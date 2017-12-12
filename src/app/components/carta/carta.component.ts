import { Input, Component, OnInit } from '@angular/core';
import { Carta } from '../../shared/carta.model';
import { Naipe } from '../../shared/naipe.enum';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() public carta: Carta;

  constructor() {
  }

  ngOnInit() {
  }

}
