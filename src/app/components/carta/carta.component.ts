import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Carta } from '../../shared/carta.model';
import { Naipe } from '../../shared/naipe.enum';


@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() public carta: Carta;
  @Input() public isMiniatura: boolean;

  @Output() zoomNaCarta: EventEmitter<Carta> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  zoom() {
    if (this.isMiniatura) {
      this.zoomNaCarta.emit(this.carta);
    }
  }

}
