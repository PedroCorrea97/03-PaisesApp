import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  
  termino: string = ''
  hayError: boolean = false;
  capital: Country[] = [];

  constructor ( private PaisService: PaisService ) {}

  buscar( termino: string ) {

    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarCapital( termino )
      .subscribe({
        next: (capital) => {
        console.log(capital);
        this.capital = capital;

      },
      error: (err) => {
        this.hayError = true;
        this.capital = [];
      }
      });
    
  }

}
