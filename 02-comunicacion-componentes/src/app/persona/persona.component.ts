import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
})
export class PersonaComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  @ViewChild('nombreInput') nombreView: ElementRef;
  @ViewChild('apellidoInput') apellidoView: ElementRef;

  titulo: string = 'Listado Personas';

  registrarPersona() {
    const nombre = this.nombreView.nativeElement.value;
    const apellido = this.apellidoView.nativeElement.value;
    let persona = new Persona(nombre, apellido);
    this.personaCreada.emit(persona);
  }
}
