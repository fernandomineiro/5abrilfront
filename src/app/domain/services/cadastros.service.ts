import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Estados } from '../model/estados';
import { Filiais } from '../model/filiais';
import { Municipios } from '../model/municipios';
import { Pessoas } from '../model/pessoas';
import { Propriedades } from '../model/propriedades';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {
  base = 'http://localhost:3333/api/';
  base_estados = this.base+'estado';
  base_filiais = this.base+'filial';
  base_municipios = this.base+'municipio';
  base_pessoas = this.base+'pessoa';
  base_propriedades = this.base+'propriedade';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getEstado(): Observable<any> {
    return this.http
      .get<Estados>(this.base_estados)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getFiliais(): Observable<Filiais> {
    return this.http
      .get<Filiais>(this.base_filiais)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getMunicipios(): Observable<Municipios> {
    return this.http
      .get<Municipios>(this.base_municipios)
      .pipe(map(response => response,
        retry(2)),
        catchError(this.handleError)
      )
  }
  getPessoas(): Observable<Pessoas> {
    return this.http
      .get<Pessoas>(this.base_pessoas)
      .pipe(map(response => response,
        retry(2)),
        catchError(this.handleError)
      )
  }
  getPropriedades(): Observable<Propriedades> {
    return this.http
      .get<Propriedades>(this.base_propriedades)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  deleteEstado(id) {
    return this.http
      .delete<Estados>(this.base_estados + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deletefiliais(id) {
    return this.http
      .delete<Filiais>(this.base_filiais + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteMunicipios(id) {
    return this.http
      .delete<Municipios>(this.base_municipios + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deletePessoas(id) {
    return this.http
      .delete<Pessoas>(this.base_pessoas + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deletePropriedades(id) {
    return this.http
      .delete<Propriedades>(this.base_propriedades + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createEstado(item): Observable<Estados> {
    return this.http
      .post<Estados>(this.base_estados, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createFiliais(item): Observable<Filiais> {
    return this.http
      .post<Filiais>(this.base_filiais, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createMunicipios(item): Observable<Municipios> {
    return this.http
      .post<Municipios>(this.base_municipios, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createPessoas(item): Observable<Pessoas> {
    return this.http
      .post<Pessoas>(this.base_pessoas, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createPropriedades(item): Observable<Propriedades> {
    return this.http
      .post<Propriedades>(this.base_propriedades, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateEstados(id, item): Observable<Estados> {
    return this.http
      .put<Estados>(this.base_estados + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateFiliais(item): Observable<Filiais> {
    return this.http
      .put<Filiais>(this.base_filiais, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateMunicipios(id, item): Observable<Municipios> {
    return this.http
      .put<Municipios>(this.base_municipios + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updatePessoas(item): Observable<Pessoas> {
    return this.http
      .put<Pessoas>(this.base_pessoas, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updatePropriedades(id, item): Observable<Propriedades> {
    return this.http
      .put<Propriedades>(this.base_propriedades + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  ativa(id): Observable<Propriedades> {
    return this.http
      .put<Propriedades>(this.base_propriedades + 'a/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  desativaativa(id): Observable<Propriedades> {
    return this.http
      .put<Propriedades>(this.base_propriedades + 'd/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisaestado(item): Observable<Estados> {
    return this.http
      .post<Estados>(this.base_estados + 'busca', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisamunicipio(item): Observable<Municipios> {
    return this.http
      .post<Municipios>(this.base_municipios + 'busca', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 

  pesquisapessoa(item): Observable<Pessoas> {
    return this.http
      .post<Pessoas>(this.base_pessoas + 'busca', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisapropriedade(item): Observable<Propriedades> {
    return this.http
      .post<Propriedades>(this.base_propriedades + 'busca', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisafilial(item): Observable<Filiais> {
    return this.http
      .post<Filiais>(this.base_filiais + 'busca', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisadafilial(item): Observable<Filiais> {
    return this.http
      .post<Filiais>(this.base_filiais + 'buscada', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisadamunicipio(item): Observable<Filiais> {
    return this.http
      .post<Filiais>(this.base_municipios + 'buscada', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisadapessoa(item): Observable<Filiais> {
    return this.http
      .post<Filiais>(this.base_pessoas + 'buscada', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  filialativa(id): Observable<Filiais> {
    return this.http
      .put<Filiais>(this.base_filiais + 'a/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  filialdesativa(id): Observable<Filiais> {
    return this.http
      .put<Filiais>(this.base_filiais + 'd/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pessoaativa(id): Observable<Pessoas> {
    return this.http
      .put<Pessoas>(this.base_pessoas + 'a/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pessoadesativa(id): Observable<Pessoas> {
    return this.http
      .put<Pessoas>(this.base_pessoas + 'd/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  municiipoativa(id): Observable<Municipios> {
    return this.http
      .put<Municipios>(this.base_municipios + 'a/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  municipiodesativa(id): Observable<Municipios> {
    return this.http
      .put<Municipios>(this.base_municipios + 'd/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  

  



  

}
