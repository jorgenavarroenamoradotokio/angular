import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { AnimalComponent } from './animal/animal.component';

@NgModule({
  declarations: [AppComponent, PersonaComponent, CalculadoraComponent, AnimalComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
