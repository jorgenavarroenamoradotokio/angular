import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent {
  operadorA: number = 0;
  operadorB: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = this.operadorA + this.operadorB;
  }
}
