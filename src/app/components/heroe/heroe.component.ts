import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private activeRoute: ActivatedRoute,
               private heroeService: HeroesService
    ) {

      this.activeRoute.params.subscribe( params => {
        this.heroe = heroeService.getHeroe(params.id);
    });

  }

  ngOnInit() {}

}
