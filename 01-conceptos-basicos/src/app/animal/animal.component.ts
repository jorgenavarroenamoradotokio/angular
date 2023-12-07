import { Component } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
})
export class AnimalComponent {
  nombreInput: string = '';
  razaInput: string = '';
  animales: Animal[] = [
    new Animal('Taison', 'Labrador'),
    new Animal('Boby', 'Pastor aleman'),
  ];

  agregarAnimal(){
    const animal = new Animal(this.nombreInput, this.razaInput);
    this.animales.push(animal);
  }
}
