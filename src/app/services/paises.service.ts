import { Injectable } from "@angular/core";
import { Pais } from '../interfaces/Pais.interface';

@Injectable()
export class PaisesService{
  private _paises:Pais[] = [
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

  get paises(){
    return [...this._paises];
  }

  constructor(){
    console.log("Service On Work");
  }
}
