import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasServiceService } from 'src/app/services/personas-service.service';
import { Persona }from 'src/app/pages/personas/persona';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss']
})
export class FormPacienteComponent implements OnInit {



  persona: Persona = new Persona();
  titulo: string = "Registro de Personas"
  constructor(private personaService: PersonasServiceService, private router: Router
    , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar()
    this.persona.rol="paciente"

    
  }

  create(): void {
    console.log(this.persona);
    this.personaService.create(this.persona).subscribe(

      res => this.router.navigate(['/pacientes'])
    );
  }

  cargar(): void {
      try {
        this.activatedRoute.params.subscribe(
          p => {
    
           let cedula = p ['cedula'];
            if(cedula){
              
              this.personaService.get(cedula).subscribe(
                
                per=>this.persona=per
              )
            }
          }
       )

       
      } catch (error) {
        
      }
    
  }
 
  update ():void{

    this.personaService.update(this.persona).subscribe(
      res => this.router.navigate(['/pacientes'])

    )
  }
}
