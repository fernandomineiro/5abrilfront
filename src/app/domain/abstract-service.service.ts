import { Filtros } from './filtros';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbstractService extends Filtros {
  protected API = environment.API;
  protected url: string;
  protected primaryKey: string;
  protected model;
  protected semId = false;

  constructor(protected http: HttpClient) {
    super();
  }

  public async salvar(model: any): Promise<any> {
    let response;

    const entity = this.entityFromModel(model);
    await this.post(this.url, entity)
      .toPromise()
      .then(responseEntity => {
        if (!this.semId) {
          response = responseEntity[this.primaryKey];
        } else {
          response = responseEntity;
        }
      });

    return response;
  }

  public async atualizar(model: any): Promise<any> {
    let response;
    const id = model['id'];
    delete model['id'];
    const entity = this.entityFromModel(model);
    await this.patch(`${this.url}/${id}`, entity)
      .toPromise()
      .then(responseEntity => {
        response = responseEntity;
      });

    return response;
  }

  public async lista(): Promise<any[]> {
    const response = this.getLista();
    this.filtro = {};
    return response;
  }

  public async unico(): Promise<any> {
    const response = this.getLista()[0];
    this.filtro = {};
    return response;
  }

  protected async getLista(): Promise<any[]> {
    const modelArray = [];

    await this.get(this.url, this.filtro)
      .toPromise()
      .then(response => {
        response.forEach(element => {
          const model = this.modelFromEntity(element);

          modelArray.push(model);
        });
      })
      .catch(console.warn)
      .finally(() => (this.filtro = {}));
    this.filtro = {};
    return modelArray;
  }

  protected modelFromEntity(entity: object, model?): any {
    let modelClone;

    if (model) {
      modelClone = Object.assign(
        Object.create(Object.getPrototypeOf(model)),
        model
      );
    } else {
      modelClone = Object.assign(
        Object.create(Object.getPrototypeOf(this.model)),
        this.model
      );
    }

    if (!this.semId) {
      const campoId = Object.keys(entity)[0];
      // tslint:disable-next-line: no-string-literal
      modelClone['id'] = entity[campoId];
      delete entity[campoId];
    }

    for (const key of Object.keys(entity)) {
      if (key !== 'pivot') {
        let str = key;
        let i = str.length;
        while (i--) {
          if (str.charAt(i) === '_') {
            const tmp = str.split('');
            tmp[i + 1] = tmp[i + 1].toUpperCase();
            tmp.splice(i, 1);
            str = tmp.join('');
          }
        }
        // tslint:disable-next-line:no-eval
        eval(`modelClone.${str} = entity[key]`);
      }
    }
    return modelClone;
  }

  protected entityFromModel(model: object): object {
    let entity = {};

    for (const key of Object.keys(model)) {
      let str = key;
      let i = str.length;
      while (i--) {
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
          const tmp = [str.slice(0, i), '_', str.slice(i)].join('');

          const tmp2 = tmp.split('');
          tmp2[i + 1] = tmp[i + 1].toLowerCase();

          str = tmp2.join('');
        }
      }
      eval(`entity.${str} = model[key]`);
    }

    return entity;
  }

  protected get(url: string, filter?: object): Observable<any> {
    if (filter) {
      let params = new HttpParams();
      for (const entry of Object.entries(filter)) {
        const name = entry[0];
        const value = entry[1];
        params = params.set(name, value);
      }
      return this.http.get<any>(url, { params });
    } else {
      return this.http.get<any>(url);
    }
  }

  protected post(url: string, data: object): Observable<any> {
    return this.http.post(url, data);
  }

  protected put(url: string, data: object): Observable<any> {
    return this.http.put(url, data);
  }

  protected patch(url: string, data: object): Observable<any> {
    return this.http.patch(url, data);
  }
}
