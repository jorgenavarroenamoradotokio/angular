import { Component } from '@angular/core';
import { Gasto } from 'src/app/model/gasto.model';
import { Ingreso } from 'src/app/model/ingreso.model';
import { ServiceGasto } from 'src/app/service/gasto.service';
import { ServiceIngreso } from 'src/app/service/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  tipoOper: string = 'ingOperacion';
  descInput: string = '';
  valorInput: number = 0;

  constructor(
    private serviceIngreso: ServiceIngreso,
    private serviceGasto: ServiceGasto
  ) {}

  tipoOperacion(evento: any): void {
    this.tipoOper = evento.target.value;
  }

  registrarValor(): void {
    this.tipoOper === 'ingOperacion'
      ? this.serviceIngreso.ingresos.push(new Ingreso(this.descInput, this.valorInput))
      : this.serviceGasto.gastos.push(new Gasto(this.descInput, this.valorInput));
  }
}
