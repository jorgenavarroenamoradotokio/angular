import { Component } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent {
  nombre: string = 'Luca';
  raza: String = 'Labrador';
  private edad: number = 28;

  getEdad(): number {
    return this.edad;
  }
}
