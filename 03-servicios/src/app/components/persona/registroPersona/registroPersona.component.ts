import { Component, ElementRef, ViewChild } from '@angular/core';

import { LoggingService } from '../../../service/logger/LoggingService.service';
import { PersonaService } from '../../../service/persona/persona.service';

import { Persona } from '../../../model/persona/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './registroPersona.component.html',
})
export class RegistroPersonaComponent {
  @ViewChild('nombre') nombreFrm: ElementRef;
  @ViewChild('apellido') apellidoFrm: ElementRef;

  titulo: string = 'Listado de personas';

  constructor(private personaService: PersonaService) {
      this.personaService.saludar.subscribe((indice: number) => alert('El indice es ' + indice));
  }

  onRegistroPersona() {
    const nombre = this.nombreFrm.nativeElement.value;
    const apellido = this.apellidoFrm.nativeElement.value;
    let persona = new Persona(nombre, apellido);
    this.personaService.registrarPersona(persona);
  }
}
