import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private PaisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(switchMap( ({ id }) => this.PaisService.getPaisCODE( id ) ),
      tap( console.log )
      )
      .subscribe( (pais) => this.pais = pais[0]);
    
    // this.activateRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );

    //     this.PaisService.getPaisCODE( id )
    //     .subscribe( pais =>{
    //       console.log(pais);
    //     });

    //   });

  }

}
