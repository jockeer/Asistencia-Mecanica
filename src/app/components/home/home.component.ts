import { Component } from "@angular/core";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent{
    mostrar = true;
    frase:any={
        mensaje: 'A lo hecho pecho',
        autor: 'Homero'
    }
    personajes:string[]=[
        'Bart',
        'Lisa',
        'Marge'
    ]
}