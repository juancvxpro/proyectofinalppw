import { Component, OnInit } from '@angular/core';
import { Form, FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasServiceService } from 'src/app/services/personas-service.service';
import { Persona } from '../personas/persona';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  persona: Persona = new Persona();
  isLogin:boolean = false;
  co:string="";
  pa:string="";
  loginForm = new FormGroup ({
  
    usuario: new FormControl('',Validators.required),
    password:  new FormControl('',Validators.required)
  })
  constructor(private personaService: PersonasServiceService, private router: Router
    , private activatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
 
  }

  login(): void {
     this.cargarParams()
    try {

     if (this.co&&this.pa ){
     
     if( this.checkLogin()) {

        this.toastr.success('Inicio de sesion exitoso', 'inicio de sesion exitoso',{positionClass:'toast-bottom-right'}) ;
        this.isLogin=true;
        this.router.navigate(['personas']);
        return
      }else{
        console.log("NOOO")
        return
      }

     }else {
       console.log("nuloo")
      return
     }
     
    
    
    } catch (error) {
      console.log("ERROR")
      this.router.navigate(['login']);
    }
    
this.co="";
this.pa="";
}

checkLogin():boolean{

 if(this.personaService.getCurrentLog(this.co,this.pa).subscribe( 
    per=>this.persona=per
    
  )){
  
    return true

  }else{

    return false
  }
  
}
cargarParams():void{
  this.activatedRoute.params.subscribe(
    params => {
      this.co = params['usuario'] ;
      this.pa=  params['pass']
    } 
 )
}
}
