import { Gasto } from '../model/gasto.model';

export class ServiceGasto {
  gastos: Gasto[] = [new Gasto('Alquiler', 900), new Gasto('Ropa', 200)];

  eliminar(gasto: Gasto) {
    const indice: number = this.gastos.indexOf(gasto);
    this.gastos.splice(indice, 1);
  }
}
