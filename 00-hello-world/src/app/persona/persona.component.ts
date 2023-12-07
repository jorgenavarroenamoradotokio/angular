import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaCompontent {
  disabled: boolean = false;
  mensaje: string = 'No se ha registrado ninguna persona';

  agregarPersona() {
    this.mensaje = 'Persona agregada';
  }
}
