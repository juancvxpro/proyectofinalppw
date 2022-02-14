import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasServiceService } from 'src/app/services/personas-service.service';
import { Persona }from 'src/app/pages/personas/persona';

@Component({
  selector: 'app-form-medicos',
  templateUrl: './form-medicos.component.html',
  styleUrls: ['./form-medicos.component.scss']
})
export class FormMedicosComponent implements OnInit {


  persona: Persona = new Persona();
  titulo: string = "Registro de Personas"
  constructor(private personaService: PersonasServiceService, private router: Router
    , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar()
    this.persona.rol="medico"

    
  }

  create(): void {
    console.log(this.persona);
    this.personaService.create(this.persona).subscribe(

      res => this.router.navigate(['/medicos'])
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
      res => this.router.navigate(['/medicos'])

    )
  }

}
