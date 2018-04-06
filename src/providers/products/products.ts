import { Product } from './../../models/product';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(public api: Api) { }
  /**
   * Get All Categorys like Blouse, Sarees etc..
   */
  allCategorys():Observable<any>{
    return this.api.get("categorys", {});
  }
  /**
   * GetAll Products
   */
  allProducts():Observable<Product> {
    return this.api.get('allproducts', {});
  }
  /**
   * GetAll Products with Images
   */
  allProductsWithImages():any {
    return this.api.get('products', {});
  }
  /**
   * Get single Product By Id
   * @param Id
   */
  productById(Id):Observable<Product>{
    return this.api.get('getproduct/'+Id, {});
  }
  /**
   * Get Front View types
   */
  frontViewTypes(){
    return this.api.get('frontviewtypes', {});
  }

}
