import { Component, ViewChild } from '@angular/core';
import { Product } from '../models/Product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // name = "Pedro P";

  addToCart:number = 0;
  product = {
    name: 'iPhone',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 5,
    pImage: "/assets/images/phone-sample.png"
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount) / 100
  }

  onNameChange(event: any){
    // this.name = event.target.value;
    // console.log(event.target.value)
    // this.name = "Mark";
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--; 
    }
  }

  incrementCartValue(){
    if(this.addToCart <= this.product.inStock){
      this.addToCart++;
    }
  }

  listOfString: string[] = ['Mark', 'John', 'Steve'];

  searchText: string = '';

  @ViewChild('ProductListComponent') productListComponent: ProductListComponent;

  setSearchText(value: string){
    this.searchText = value; 
  }
  
}
