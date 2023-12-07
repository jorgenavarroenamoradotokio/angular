import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaCompontent } from './persona/persona.component';
import { AnimalComponent } from './animal/animal.component';

@NgModule({
  declarations: [AppComponent, PersonaCompontent, AnimalComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
