import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/Pais.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent{

  get paises():Pais[]{
    return this.paisesService.paises;
  }

  constructor(private paisesService:PaisesService){}
}
