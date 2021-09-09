import { Component, OnInit } from '@angular/core';
// importar el servicio
import { PersonasService } from '../personas.service';
// para redireccionar al usuario
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  constructor(private personasService : PersonasService,
              private router : Router        
    ) { }

  ngOnInit() {
  }
  guardar(nombre :HTMLInputElement, edad :HTMLInputElement, url :HTMLInputElement)
  {
    const nom = nombre.value;
    const eda = edad.value;
    const img = url.value;

    this.personasService.addPersona(nom, Number(eda), img);
    this.router.navigate(['/listado-persona']);
  }

}
