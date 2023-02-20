import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];

  constructor ( private PaisService: PaisService ) {}

  buscar( termino: string ) {

    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarPais( termino )
      .subscribe({
        next: (paises) => {
        console.log(paises);
        this.paises = paises;

      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
      });
    
  }

  sugerencias( termino: string) {
    this.hayError = false;
    
  }

}
