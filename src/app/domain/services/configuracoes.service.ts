import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Menu } from '../model/menu';
import { Perfil } from '../model/perfil';
import { Usuarios } from '../model/usuarios';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConfiguracoesService {
  base = 'http://localhost:3333/api/';
  base_menu = this.base+'menu';
  base_perfil = this.base+'perfil';
  base_usuario = this.base+'usuario';
  base_pessoa = this.base+'pessoa';

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

  getMenu(): Observable<Menu> {
    return this.http
      .get<Menu>(this.base_menu)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getPessoa(): Observable<Menu> {
    return this.http
      .get<Menu>(this.base_pessoa)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getmenus(): Observable<Menu> {
    return this.http
      .get<Menu>(this.base_menu + 'a')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getPerfil(): Observable<Perfil> {
    return this.http
      .get<Perfil>(this.base_perfil)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getUsuario(): Observable<Usuarios> {
    return this.http
      .get<Usuarios>(this.base_usuario)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteMenu(id) {
    return this.http
      .delete<Menu>(this.base_menu + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deletePerfil(id) {
    return this.http
      .delete<Perfil>(this.base_perfil + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteUsuario(id) {
    return this.http
      .delete<Usuarios>(this.base_usuario + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createMenu(item): Observable<Menu> {
    return this.http
      .post<Menu>(this.base_menu, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createPerfil(item): Observable<Perfil> {
    return this.http
      .post<Perfil>(this.base_perfil, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createUsuario(item): Observable<Usuarios> {
    return this.http
      .post<Usuarios>(this.base_usuario, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateMenu(item): Observable<Menu> {
    return this.http
      .put<Menu>(this.base_menu, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updatePerfil(item): Observable<Perfil> {
    return this.http
      .put<Perfil>(this.base_perfil, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateUsuario(id, item): Observable<Usuarios> {
    return this.http
      .put<Usuarios>(this.base_usuario + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  usuarioativa(id): Observable<Usuarios> {
    return this.http
      .put<Usuarios>(this.base_usuario + 'a/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  usuariodesativaativa(id): Observable<Usuarios> {
    return this.http
      .put<Usuarios>(this.base_usuario + 'd/' + id,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisamenu(item): Observable<Menu> {
    return this.http
      .post<Menu>(this.base_menu + 'busca', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisaperfil(item): Observable<Perfil> {
    return this.http
      .post<Perfil>(this.base_perfil + 'busca', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisausuario(item): Observable<Usuarios> {
    return this.http
      .post<Usuarios>(this.base_usuario + 'busca', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisadamenu(item): Observable<Menu> {
    return this.http
      .post<Menu>(this.base_menu + 'buscada', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisadaperfil(item): Observable<Menu> {
    return this.http
      .post<Menu>(this.base_perfil + 'buscada', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisadapessoa(item): Observable<Menu> {
    return this.http
      .post<Menu>(this.base_pessoa + 'buscada', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  pesquisadausuario(item): Observable<Usuarios> {
    return this.http
      .post<Usuarios>(this.base_usuario + 'buscada', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
