import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  constructor( private _heroesServices: HeroesServices, private router:Router) { 

  }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe( idx:number){
    // console.log(idx);
    this.router.navigate( ['/heroe',idx] );
  }

}
