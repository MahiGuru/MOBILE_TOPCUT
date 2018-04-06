import { ProductService } from './../../providers/products/products';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  public category;
  public searchInput;
  public shouldShowCancel;
  public listOfProducts;
  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductService) {
    this.productService.allProducts().subscribe(products =>{
        this.listOfProducts = products;
        console.log(this.listOfProducts);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }
  gotoDetailsPage(event){

  }
}
