import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.css']
})
export class ListarAlumnoComponent implements OnInit {
Alumnos:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerAlumnos().subscribe(respuesta=>{
      console.log(respuesta)
      this.Alumnos=respuesta;
    });
  }
  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro?")){
    this.crudService.BorrarAlumno(id).subscribe((respuesta)=>{
      this.Alumnos.splice(iControl,1);
    });
  }
  }

}
