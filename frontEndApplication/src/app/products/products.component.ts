import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  selectedProduct: Product;
  
  constructor(private productsService: ProductsService) { }
  
  ngOnInit(): void {
    this.productsService.productSelected
      .subscribe(
        (product: Product) => {
          console.log("evento capturado: productSelected", product);
          this.selectedProduct = product;
        }
      );
  }
}
