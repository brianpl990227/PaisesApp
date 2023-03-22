import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'http://api.countrylayer.com/v2'
  //TODO: Mover esto para un fichero de configuracion
  private apiKey: string = '5d107d89f6b6fb8f92741fd62d7e4a5b'
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>
  {
    const params = new HttpParams().set('access_key', this.apiKey).set('fullText', false)
    return this.http.get<Country[]>(`${this.apiUrl}/name/${termino}`, {params})
  }

  buscarCapital(termino: string): Observable<Country[]>
  {
    const params = new HttpParams().set('access_key', this.apiKey)
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${termino}`, {params})
  }

  getPaisPorAlpha(id: string): Observable<Country>
  {
     const params = new HttpParams().set('access_key', this.apiKey)
     return this.http.get<Country>(`${this.apiUrl}/alpha/${id}`, {params})
  }

  getPaisPorRegion(region: string): Observable<Country[]>
  {
     const params = new HttpParams().set('access_key', this.apiKey)
     return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`, {params})
  }

}
