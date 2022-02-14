import { Component, OnInit } from '@angular/core';
import { PersonasServiceService } from 'src/app/services/personas-service.service';
import { Persona } from './persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  

  personas: any;
  constructor(private personaService:PersonasServiceService) { }

  ngOnInit(): void {
    this.personaService.getAll().subscribe(
    p => this.personas=p
    );
  }
  
  delete(persona:Persona):void{
    this.personaService.delete(persona.cedula).subscribe(

      res=> this.personaService.getAll().subscribe(

        response=>this.personas=response
      )
    )
  }
}
