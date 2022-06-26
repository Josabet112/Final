import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
  })
  export class AgregarAlumnoComponent implements OnInit {
    formularioDeAlumno:FormGroup;
  


    constructor(
    public formulario:FormBuilder,
    private CrudService:CrudService,
    private ruteador:Router
     ) { 
    

    this.formularioDeAlumno=this.formulario.group({
      nombre: [''],
      correo: ['']

    });
    }
    ngOnInit(): void {
    }
    enviarDatos():any{
    console.log("Me presionaste");
    console.log(this.formularioDeAlumno.value);
    this.CrudService.AgregarAlumno(this.formularioDeAlumno.value).subscribe(respuesta=>{
      this.ruteador.navigateByUrl('/listar-alumno');
    });

  
  
    }

  }
