import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product = {
    name: 'iPhone',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 5
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount) / 100
  }
}
