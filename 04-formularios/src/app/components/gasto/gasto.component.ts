import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from 'src/app/model/gasto.model';
import { ServiceGasto } from 'src/app/service/gasto.service';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css'],
})
export class GastoComponent implements OnInit {
  @Input() ingresoTotal: number = 0;
  gastos: Gasto[] = [];

  constructor(private serviceGasto: ServiceGasto) {}

  ngOnInit(): void {
    this.gastos = this.serviceGasto.gastos;
  }

  elimninarRegistro(gasto: Gasto) {
    this.serviceGasto.eliminar(gasto);
  }

  calcularPorcentaje(gasto: Gasto) {
    return gasto.valor / this.ingresoTotal;
  }
}
