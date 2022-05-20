import { Component, Input, NgModule } from '@angular/core';
import { Pais } from '../../interfaces/Pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent{
  @Input() pais:[Pais, boolean] = [{
    name:"",
    population: 0,
    flag: ""
  }, false];

  closeModal(){
    this.pais[1] = false;
  }
}
