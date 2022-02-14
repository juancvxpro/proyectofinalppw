import { Component, OnInit } from '@angular/core';
import { PersonasServiceService } from 'src/app/services/personas-service.service';
import { Persona }from 'src/app/pages/personas/persona';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

  personas: any;
  constructor(private personaService:PersonasServiceService) { }

  ngOnInit(): void {
    this.personaService.getMedicos().subscribe(
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
