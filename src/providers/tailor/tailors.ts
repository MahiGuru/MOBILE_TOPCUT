import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TailorService {

  constructor(public api: Api) { }

  allTailors(): Observable<any>{
    return this.api.get('tailors', {}).map((result: any) => result.json());
  }
  addProductToList(): Observable<any>{
    return this.api.get('tailoraddproducts', {}).map((result: any) => result.json());
  }
  tailorProducts(id): Observable<any>{
    return this.api.get('listtailors/'+id, {}).map((result: any) => result.json());
  }
  nearByTailors(nearer, geocoords): Observable<any>{
    var obj = {
      latitude : geocoords.latitude,
      longitude : geocoords.longitude
    }
    return this.api.post('neartailors', {near:nearer, coords:obj}).map((result: any) => result.json());
  }

}
