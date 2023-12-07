import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroPersonaComponent } from './components/persona/registroPersona/registroPersona.component';
import { ListadoPersonaComponent } from './components/persona/listadoPersona/listadoPersona.component';

import { LoggingService } from './service/logger/LoggingService.service';
import { PersonaService } from './service/persona/persona.service';

@NgModule({
  declarations: [AppComponent, RegistroPersonaComponent, ListadoPersonaComponent],
  imports: [BrowserModule, FormsModule],
  providers:[LoggingService, PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
