import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './pages/personas/personas.component';
import { FormPersonaComponent } from './pages/personas/form-persona.component';
import { LoginComponent } from './pages/login/login.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { FormPacienteComponent } from './pages/pacientes/form-paciente.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { FormMedicosComponent } from './pages/medicos/form-medicos.component';



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
  },
  {
    path: 'pacientes/form', component: FormPacienteComponent
  },
  {
    path: 'login/:usuario/:pass', component: LoginComponent
  },
  {
    path: 'pacientes', component: PacientesComponent
  },
  {
    path: 'pacientes/form', component: PacientesComponent
  },

  {
    path: 'pacientes/form/:cedula', component: FormPacienteComponent
  },

  {
    path: 'medicos', component: MedicosComponent
  },
  {
    path: 'medicos/form', component: FormMedicosComponent
  },

  {
    path: 'medicos/form/:cedula', component: FormMedicosComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  LoginComponent
  ,PersonasComponent
  ,FormPersonaComponent
  ,PacientesComponent
  ,FormPacienteComponent,
  MedicosComponent,
  FormMedicosComponent
]
