import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {
// atributos
  constructor() { }
  ngOnInit() {
  }
// metodos
  onClick(n1 : HTMLInputElement, n2 :HTMLInputElement, n3 :HTMLInputElement)
  {
    let res = Number(n1.value)+Number(n2.value)+Number(n3.value)
    res = res/ 3
    console.log("El promedio es: " + res)
  }


}
