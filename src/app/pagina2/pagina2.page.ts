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
  listado : [
    {
      id : '1',
      nombre: 'nombre',
      direccion: 'vespucio 1501'
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
