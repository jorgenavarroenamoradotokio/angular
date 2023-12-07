import { Injectable , EventEmitter} from '@angular/core';
import { Persona } from '../../model/persona/persona.model';
import { LoggingService } from '../logger/LoggingService.service';

@Injectable()
export class PersonaService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Lara', 'Garcia'),
    new Persona('Karla', 'Martinez'),
  ];

  saludar = new EventEmitter<number>();

  constructor(private logginService: LoggingService){}

  registrarPersona(persona: Persona) {
    this.logginService.registrarMensajeConsola("agregamos persona: "+persona.nombre);
    this.personas.push(persona);
  }
}
