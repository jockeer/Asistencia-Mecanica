import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from 'src/app/services/heroes.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fheroe',
  templateUrl: './fheroe.component.html',
  styleUrls: ['./fheroe.component.css']
})
export class FheroeComponent implements OnInit {

  heroe:any[]=[];
  terminos:string="";

  constructor(private activatedRouter:ActivatedRoute, private _heroesService:HeroesServices, private router:Router ) {

  }
  
  ngOnInit() {
    this.activatedRouter.params.subscribe((params) => {
      this.terminos=params['termino'];
      this.heroe=this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroe)
   })
  }

  verHeroe( idx:number){
    // console.log(idx);
    this.router.navigate( ['/heroe',idx] );
  }

  
}
