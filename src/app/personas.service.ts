import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personas : Persona[] = [
    {
      id      : 1,
      nombre  : 'Juan perez',
      edad    : 20,
      foto    : 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?size=626&ext=jpg'
    },
    {
      id      : 2,
      nombre  : 'Andrea tessa',
      edad    : 21,
      foto    : 'https://img.freepik.com/foto-gratis/mujer-tranquila-cabello-tenido-pie-manos-cruzadas-sonrisa-sincera-encantadora-demostrando-sus-dientes-perfectos-posando_273609-7675.jpg?size=626&ext=jpg'
    },
    {
      id      : 3,
      nombre  : 'ana gabriel',
      edad    : 22,
      foto    : 'https://img.freepik.com/psd-gratis/mujer-morena-hispanica-joven-que-mira-arriba-mientras-que-sonrie_1368-41150.jpg?size=626&ext=jpg'
    }
  ]


  constructor() { }

// CRUD
  getPersonas()
  { // devuelve todos las personas de la lista
    return this.personas
  }

  getPersona(id : number)
  {  // devuelve a la persona según el id encontrado
    return this.personas.find(x=> {return x.id == id})
  }

  addPersona(nombre: string, edad: number, foto: string)
  { // agrega a una nueva persona
    this.personas.push(
      {
        id      : this.personas.length + 1,
        nombre  : nombre,
        edad    : edad,
        foto    : foto
      }
    )
  }

  deletePersona(id : number)
  {
    this.personas = this.personas.filter(x => {return x.id != id})  
  }

}
