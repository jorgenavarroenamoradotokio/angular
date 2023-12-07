import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';

@NgModule({
  declarations: [AppComponent, PersonaComponent, DetallePersonaComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
