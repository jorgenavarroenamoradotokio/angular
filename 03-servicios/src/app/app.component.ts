import { Component, OnInit } from '@angular/core';
import { LoggingService } from './service/logger/LoggingService.service';
import { Persona } from './model/persona/persona.model';
import { PersonaService } from './service/persona/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService],
})
export class AppComponent implements OnInit{
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }
}
