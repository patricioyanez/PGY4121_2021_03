import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
// typeScript
// atributos
  nombre  : string;
  edad    : number;
  lista   : [];
  listado = [
    {
      id : '1',
      nombre: 'Ana',
      direccion: 'vespucio 1501'
    },
    {
      id : '2',
      nombre: 'Diego',
      direccion: 'vespucio 20000'
    },
    {
      id : '3',
      nombre: 'Alberto',
      direccion: 'vespucio 35000'
    }
  ]
  constructor() {
    this.nombre = "Ana";
    this.edad = 50;
   }


  ngOnInit() {
  }

  ///metodos
}
