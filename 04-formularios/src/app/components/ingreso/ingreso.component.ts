import { Component, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/model/ingreso.model';
import { ServiceIngreso } from 'src/app/service/ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];

  constructor(private serviceIngreso: ServiceIngreso) {}

  ngOnInit(): void {
    this.ingresos = this.serviceIngreso.ingresos;
  }

  elimninarRegistro(ingreso: Ingreso): void {
    this.serviceIngreso.eliminar(ingreso);
  }
}
