import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  region: Country[] = [];

  constructor ( private PaisService: PaisService ) {}

  getClaseCSS (region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegion ( region: string ) {
    if ( region === this.regionActiva ) { return }
    this.regionActiva = region;
    this.PaisService.buscarRegion ( region )
      .subscribe( region => this.region = region );
  }

}
