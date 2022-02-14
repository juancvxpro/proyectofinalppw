import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../pages/personas/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasServiceService {

  private url: string = "http://localhost:8080/proyectoFinal/ws/Personas"
  constructor(private http: HttpClient) { }
  // Obtener Personas
  getAll(): Observable<Persona[]> {

    return this.http.get<Persona[]>(this.url);

  }
  //crear persona
  create(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url, persona)
  }

  //obtener persona
  get(cedula:string): Observable<Persona> {

    return this.http.get<Persona>(this.url+'/'+cedula);
  }
  //actualizar persona
  update(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.url, persona)

  }
  //eliminar persona
  delete(cedula:String): Observable<Persona> {

    return this.http.delete<Persona>(this.url+'/'+cedula);
  }

  //obtener persona
  getCurrentLog(correo:string,pass:string): Observable<Persona> {

    return this.http.get<Persona>(this.url+'/'+correo+'/'+pass);
  }
}
