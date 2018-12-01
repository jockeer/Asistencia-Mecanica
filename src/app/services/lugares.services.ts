import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Lugar } from '../interfaces/lugares.interface'; 

@Injectable()
export class LugarService{

     private itemsCollection: AngularFirestoreCollection<Lugar>;
     public lugares: Lugar[] = [];
     constructor(private afs: AngularFirestore){

     }

     cargarLugares(){
          this.itemsCollection = this.afs.collection<Lugar>('lugares');

          return this.itemsCollection.valueChanges().subscribe( (lugares:Lugar[]) =>{

               // this.lugares = [];
               // for( let lugar of lugares){
               //      this.lugares.unshift(lugar);
               // }
               console.log(lugares)
               this.lugares = lugares;
               // return this.lugares;
          });
     }

     agregarLugar( marcador, nombre, descripcion ){

          let lugar:Lugar ={
               descripcion: descripcion,
               lat: marcador.lat,
               lng: marcador.lng,
               nombre: nombre     
          }

          return this.itemsCollection.add( lugar );
     }

}