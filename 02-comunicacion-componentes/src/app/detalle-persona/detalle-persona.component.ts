import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
})
export class DetallePersonaComponent {
  @Input() persona: Persona;
  @Input() indice: number;
}
