import { Component, Input } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/Pais.interface';

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

  private _default:Pais = {
    name: "default",
    population: 0,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Blank_flag.svg/1280px-Blank_flag.svg.png"
  }
}
