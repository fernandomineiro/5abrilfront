import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Atendimentos } from '../model/atendimentos';
import { Formularios } from '../model/formularios';
import { Grupo } from '../model/grupo';
import { Informacao } from '../model/informacao';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  base = 'http://localhost:3333/api/';
  base_atendimento = this.base+'grupolistainformacao';
  base_formulario = this.base+'questionario';
  base_grupo = this.base+'grupolista';
  base_informacao = this.base+'imformacao';

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

  getAtendimento(): Observable<Atendimentos> {
    return this.http
      .get<Atendimentos>(this.base_atendimento)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getFormulario(): Observable<Formularios> {
    return this.http
      .get<Formularios>(this.base_formulario)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getGrupo(): Observable<Grupo> {
    return this.http
      .get<Grupo>(this.base_grupo)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getInformacao(): Observable<Informacao> {
    return this.http
      .get<Informacao>(this.base_informacao)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteAtendimento(id) {
    return this.http
      .delete<Atendimentos>(this.base_atendimento + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteFormulario(id) {
    return this.http
      .delete<Formularios>(this.base_formulario + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteGrupo(id) {
    return this.http
      .delete<Grupo>(this.base_grupo + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteInformacao(id) {
    return this.http
      .delete<Informacao>(this.base_informacao + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createAtendimento(item): Observable<Atendimentos> {
    return this.http
      .post<Atendimentos>(this.base_atendimento, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createFormulario(item): Observable<Formularios> {
    return this.http
      .post<Formularios>(this.base_formulario, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createGrupo(item): Observable<Grupo> {
    return this.http
      .post<Grupo>(this.base_grupo, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createInformacao(item): Observable<Informacao> {
    return this.http
      .post<Informacao>(this.base_informacao, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateAtendimento(id, item): Observable<Atendimentos> {
    return this.http
      .put<Atendimentos>(this.base_atendimento + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateformulario(id, item): Observable<Formularios> {
    return this.http
      .put<Formularios>(this.base_formulario + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateGrupo(id, item): Observable<Grupo> {
    return this.http
      .put<Grupo>(this.base_grupo + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateInformacao(item): Observable<Informacao> {
    return this.http
      .put<Informacao>(this.base_informacao, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisainformacao(item): Observable<Informacao> {
    return this.http
      .post<Informacao>(this.base_informacao + 'busca', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  } 

  pesquisagrupo(item): Observable<Grupo> {
    return this.http
      .post<Grupo>(this.base_grupo + 'busca', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisaformulario(item): Observable<Grupo> {
    return this.http
      .post<Grupo>(this.base_formulario + 'busca', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisadainformacao(item): Observable<Grupo> {
    return this.http
      .post<Grupo>(this.base_informacao + 'buscada', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  informacaoativa(id): Observable<Informacao> {
    return this.http
      .put<Informacao>(this.base_informacao + 'a/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  informacaodesativa(id): Observable<Informacao> {
    return this.http
      .put<Informacao>(this.base_informacao + 'd/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  grupoativa(id): Observable<Informacao> {
    return this.http
      .put<Informacao>(this.base_grupo + 'a/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  grupodesativa(id): Observable<Informacao> {
    return this.http
      .put<Informacao>(this.base_grupo + 'd/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  formularioativa(id): Observable<Formularios> {
    return this.http
      .put<Formularios>(this.base_formulario + 'a/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  formulariodesativa(id): Observable<Formularios> {
    return this.http
      .put<Formularios>(this.base_formulario + 'd/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
