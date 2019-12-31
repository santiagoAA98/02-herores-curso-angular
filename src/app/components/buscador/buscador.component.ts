import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';
/* import { HeroesComponent } from '../heroes/heroes.component'; */

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router
            ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.name;
      this.heroes = this.heroesService.buscarHeroes(params.name);
    });
  }

}
