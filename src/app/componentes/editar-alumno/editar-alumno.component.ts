import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {
  formularioDeAlumno:FormGroup;
  elID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) {
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.ObtenerAlumno(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDeAlumno.setValue({
          nombre:respuesta[0]['nombre'],
          correo:respuesta[0]['correo']
        })
      }
      );
      this.formularioDeAlumno=this.formulario.group(
        {
          nombre:[''],
          correo:['']
        }
      )
   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeAlumno.value);
    this.crudService.EditarAlumno(this.elID,this.formularioDeAlumno.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/.listar-alumno');
    });
  }

}
