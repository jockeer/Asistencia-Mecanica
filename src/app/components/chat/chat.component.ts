import { Component, OnInit } from '@angular/core';

import { ChatService }  from '../../services/chat.services';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  mensaje:string="";
  elemento:any;

  constructor( public _cs: ChatService) { 
    this._cs.cargarMensajes();

  }

  ngOnInit(){
    this.elemento=document.getElementById('app-mensajes');
  

     setTimeout( () =>{
       this.elemento.scrollTop=this.elemento.scrollHeight

     },20);
  }

  
  enviarMensaje(){
    console.log( this.mensaje )

    if ( this.mensaje.length === 0){
      return;
    }
    this._cs.agregarMensaje( this.mensaje )
            .then( () => this.mensaje = "")
            .catch( () => console.log('Error al enviar'));  
  }
}
