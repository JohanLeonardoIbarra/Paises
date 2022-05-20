import { Injectable } from "@angular/core";
import { Pais } from '../interfaces/Pais.interface';
import { ModalComponent } from '../paises/modal/modal.component';

@Injectable()
export class PaisesService{
  private _paises:Pais[] = [
    {
      name: "colombia",
      population: 32163313,
      flag: "../../assets/img/co.png"
    },
    {
      name: "brazil",
      population: 1651561321,
      flag: "../../assets/img/br.png"
    },
    {
      name: "nose",
      population: 545468486465,
      flag: "../../assets/img/bb.png"
    },
    {
      name: "tampoco se",
      population: 684651615,
      flag: "../../assets/img/al.png"
    },
    {
      name: "la wea",
      population: 10,
      flag: "../../assets/img/cl.png"
    },
    {
      name: "ecuador sin escudo",
      population: 5,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png"
    },
    {
      name: "colombia",
      population: 10,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png"
    },
    {
      name: "ecuador sin escudo",
      population: 5,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png"
    },
    {
      name: "colombia",
      population: 10,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png"
    },
    {
      name: "ecuador sin escudo",
      population: 5,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png"
    },
    {
      name: "colombia",
      population: 10,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png"
    },
    {
      name: "ecuador sin escudo",
      population: 5,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png"
    },
  ];

  public _modal:Pais = {
    name: "",
    population: 0,
    flag: ""
  };

  get modal(){
    return this._modal;
  }
  setModal(pais:Pais){
    this._modal = pais;
  }

  get paises(){
    return [...this._paises];
  }

  constructor(){
    console.log("Service On Work");
  }
}
