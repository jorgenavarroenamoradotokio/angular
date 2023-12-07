import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { GastoComponent } from './components/gasto/gasto.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ServiceGasto } from './service/gasto.service';
import { ServiceIngreso } from './service/ingreso.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngresoComponent,
    GastoComponent,
    FormularioComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ServiceGasto, ServiceIngreso],
  bootstrap: [AppComponent],
})
export class AppModule {}
