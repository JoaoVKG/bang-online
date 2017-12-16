import { Component, OnInit, Input } from '@angular/core';
import { Carta } from '../../shared/carta.model';

@Component({
  selector: 'app-modalcard',
  templateUrl: './modalcard.component.html',
  styleUrls: ['./modalcard.component.css']
})
export class ModalcardComponent implements OnInit {

  @Input() cartaComZoom: Carta;

  constructor() { }

  ngOnInit() {
  }
}
