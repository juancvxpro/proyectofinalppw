import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './pages/personas/personas.component';
import { FormPersonaComponent } from './pages/personas/form-persona.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [

  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'personas', component: PersonasComponent
  },
  {
    path: 'personas/form', component: FormPersonaComponent
  },
  {
    path: 'personas/form/:cedula', component: FormPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [LoginComponent,PersonasComponent,FormPersonaComponent]
