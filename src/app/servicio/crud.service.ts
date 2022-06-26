import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import{Alumno} from './alumno';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: String='http://localhost/alumno'; //api de php Crudo
  
    constructor(private clienteHttp:HttpClient) { }

  AgregarAlumno(datosAlumno:Alumno):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=",datosAlumno);
  }

  ObtenerAlumnos(){
    return this.clienteHttp.get(this.API);   
  }
  BorrarAlumno(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }
  ObtenerAlumno(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  EditarAlumno(id:any,datosAlumno:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actuaizar="+id,datosAlumno);
  }
}

