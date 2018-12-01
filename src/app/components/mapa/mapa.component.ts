import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef } from '@angular/material';
import { MapaEditarComponent } from  './mapa-editar.component';
import { LugarService }  from '../../services/lugares.services';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  nombre:string="";
  descripcion:string="";
  lat:number = -17.770810033993094;
  lng:number = -63.18744858033233;
  latitud:number;
  longitud:number;
  


  constructor( public snackBar: MatSnackBar, public dialog: MatDialog, public _ls: LugarService) { 
    // if(localStorage.getItem('marcadores')){
    //   this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    // }

    this._ls.cargarLugares();
  }
  
  ngOnInit() {
  }
  
  agregarMarcador(evento){
    const coords: { lat:number, lng:number } = evento.coords;
    console.log(evento.coords.lat);
    let lat = evento.coords.lat;
    console.log(evento.coords.lng);
    let lng = evento.coords.lng;

    this.latitud= lat;
    this.longitud=lng;

    this.abrirModal(lat , lng);

    const nuevoMarcador= new Marcador( coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    // this.guardarDatabase();
    // this.snackBar.open('Marcador Agregado', 'Cerrar', {
    //   duration:3000,
    // });
  }

  editarMarcador( marcador :Marcador){

    const dialogRef = this.dialog.open( MapaEditarComponent , {
      width: '250px',
      data: {titulo: marcador.nombre , desc: marcador.descripcion}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      if (!result){
        return;
      }
      marcador.nombre = result.titulo;
      marcador.descripcion= result.desc;

      // this.guardarDatabase(marcador.nombre, marcador.descripcion);
      this.snackBar.open('Marcador Actualizado', 'Cerrar', {
        duration:3000,
      });
    });
  }

  guardarDatabase(){
    // localStorage.setItem('marcadores', JSON.stringify(this.marcadores));

    this._ls.agregarLugar(this.marcadores[0], this.nombre, this.descripcion);
    this.marcadores = [];
    document.getElementById('form').classList.remove('active');
    this.nombre="";
    this.descripcion="";
    this.snackBar.open('Lugar Añadido', 'Cerrar', {
      duration:3000,
    });
  }
  
  abrirModal(lat, lng){
    document.getElementById('form').classList.add('active');
  }
  cancelar(){
    document.getElementById('form').classList.remove('active');
    this.marcadores = [];
  }
  
  // borrarMarcador(i:number){
  //   console.log(i)
  //   this.marcadores.splice(i,1);
  //   this.guardarDatabase();
  //   this.snackBar.open('Marcador Borrado', 'Cerrar',{
  //     duration:3000,
  //   });
  // }
}
