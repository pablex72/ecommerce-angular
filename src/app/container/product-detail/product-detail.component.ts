import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  @Input() productListComp: ProductListComponent = undefined;
    product: Product = this.productListComp.selectedProduct;

    ngOnInit(){
      this.product = this.productListComp.selectedProduct; 
    }
}
