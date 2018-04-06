import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DesignerService {

  constructor(public api: Api) { }

  allDesigners(): Observable<any>{
    return this.api.get('/designers', {}).map((result: any) => result.json());
  }
  nearByDesigners(nearer, geocoords): Observable<any>{
    const geoObj = {
      latitude : geocoords.latitude,
      longitude : geocoords.longitude
    }
    return this.api.post('/neardesigners', {near:nearer, coords:geoObj}).map((result: any) => result.json());
  }

}
