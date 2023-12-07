import { Component } from '@angular/core';
import { Ingreso } from './model/ingreso.model';
import { Gasto } from './model/gasto.model';
import { ServiceIngreso } from './service/ingreso.service';
import { ServiceGasto } from './service/gasto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  gastos: Gasto[] = [];

  constructor(
    private serviceIngreso: ServiceIngreso,
    private serviceGasto: ServiceGasto
  ) {
    this.ingresos = serviceIngreso.ingresos;
    this.gastos = serviceGasto.gastos;
  }

  getIngresoTotal() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getGastosTotal() {
    let gastoTotal: number = 0;
    this.gastos.forEach((gasto) => {
      gastoTotal += gasto.valor;
    });
    return gastoTotal;
  }

  getPorcentajeTotal() {
    return this.getGastosTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getGastosTotal();
  }
}
