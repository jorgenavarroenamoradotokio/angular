import { Ingreso } from '../model/ingreso.model';

export class ServiceIngreso {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta de cocheo', 500),
  ];

  eliminar(ingreso: Ingreso) {
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1);
  }
}
