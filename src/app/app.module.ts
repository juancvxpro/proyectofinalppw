import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PersonasComponent } from './pages/personas/personas.component';
import { FormPersonaComponent } from './pages/personas/form-persona.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { FormMedicosComponent } from './pages/medicos/form-medicos.component';





const routes: Routes = [

]
@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    FormPersonaComponent,
    FooterComponent,
    LoginComponent,
    RoutingComponents,
    PacientesComponent,
    MedicosComponent,
    FormMedicosComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

