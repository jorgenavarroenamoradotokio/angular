import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '02-comunicacion-componentes';

  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Lara', 'Garcia'),
    new Persona('Karla', 'Martinez'),
  ];

  registrarPersona(persona: Persona) {
    this.personas.push(persona);
  }
}
