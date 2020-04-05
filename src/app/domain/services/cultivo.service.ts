import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Contrato } from '../model/contrato';
import { Safra } from '../model/safra';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CultivoService {
  base = 'http://localhost:3333/api/';
  base_safra = this.base+'safra';
  base_contrato = this.base+'contrato';

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

  getSafra(): Observable<Safra> {
    return this.http
      .get<Safra>(this.base_safra)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getContrato(): Observable<Contrato> {
    return this.http
      .get<Contrato>(this.base_contrato)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteSafra(id) {
    return this.http
      .delete<Safra>(this.base_safra + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteContrato(id) {
    return this.http
      .delete<Contrato>(this.base_contrato + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createSafra(item): Observable<Safra> {
    return this.http
      .post<Safra>(this.base_safra, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  createContrato(item): Observable<Contrato> {
    return this.http
      .post<Contrato>(this.base_contrato, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateSafra(id, item): Observable<Safra> {
    return this.http
      .put<Safra>(this.base_safra + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateContrato(id, item): Observable<Contrato> {
    return this.http
      .put<Contrato>(this.base_contrato + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
