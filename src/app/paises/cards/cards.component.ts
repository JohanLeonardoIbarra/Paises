import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from '../../interfaces/Pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent{
  @Input() pais:Pais = {
    name:"",
    population: 0,
    flag: ""
  };

  @Output() onShowModal:EventEmitter<[Pais, boolean]> = new EventEmitter();

  showModal(){
    this.onShowModal.emit([this.pais, true]);
  }

  constructor(private paisesService:PaisesService){}
}
