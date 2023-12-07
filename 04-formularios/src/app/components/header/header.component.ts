import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() presupuesto: number = 0;
  @Input() ingreso: number = 0;
  @Input() gasto: number = 0;
  @Input() porcentaje: number = 0;
}
