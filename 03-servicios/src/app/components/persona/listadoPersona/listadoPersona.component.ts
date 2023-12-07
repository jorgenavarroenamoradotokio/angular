import { Component, Input } from '@angular/core';
import { Persona } from '../../../model/persona/persona.model';
import { PersonaService } from 'src/app/service/persona/persona.service';

@Component({
  selector: 'app-listadoPersona',
  templateUrl: './listadoPersona.component.html',
})
export class ListadoPersonaComponent {
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personaService: PersonaService) {}

  emitirSaludo() {
    this.personaService.saludar.emit(this.indice);
  }
}
