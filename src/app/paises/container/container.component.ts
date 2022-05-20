import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/Pais.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent{

  private _paises:Pais[] = [];
  private _modal:[Pais, boolean] = [{
    name:"",
    population: 0,
    flag: ""
  }, false];
  private _count:number = 3;

  get paises():Pais[]{
    this._paises = this.allPaises;
    return this._paises.splice(0,this._count);
  }

  get allPaises():Pais[]{
    return [...this.paisesService.paises];
  }

  get modal():[Pais, boolean]{
    return this._modal;
  }

  mostrarMas(){
    this._count+=3;
  }

  showModal( modal:[Pais, boolean] ){
    this._modal = modal;
  }

  constructor(private paisesService:PaisesService){}
}
