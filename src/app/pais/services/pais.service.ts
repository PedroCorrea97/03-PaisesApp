import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string ='https://restcountries.com/v3.1';

  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,flags,cca2,population' );
  }

  constructor( private http: HttpClient ) { }

  buscarPais ( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarCapital ( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getPaisCODE ( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/alpha/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarRegion ( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } )
  }

}
