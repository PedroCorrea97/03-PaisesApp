import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

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
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.PaisService.buscarPais ( termino )
      .subscribe({ next: (paises) => {this.paisesSugeridos = paises.splice(0,3)},
                   error: (err) => {this.paisesSugeridos = []}} );
  }

  buscarSugerido ( termino:string ) {
      this.buscar( termino );
  }

}
