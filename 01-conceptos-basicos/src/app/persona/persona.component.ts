import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  private titulo: string = '';
  private mensaje: string = 'No se ha registrado ninguna persona';
  nombre: string = 'Alexandra';
  mostrar: boolean = false;

  registrarTitulo(event: Event) {
    this.titulo = (<HTMLInputElement>event.target).value;
  }

  registrarPersona() {
    this.mensaje = 'Se ha registrado con exito';
    this.mostrar = true;
  }

  getNombre() {
    return this.nombre;
  }

  getTitulo() {
    return this.titulo;
  }

  getMensaje() {
    return this.mensaje;
  }
}
