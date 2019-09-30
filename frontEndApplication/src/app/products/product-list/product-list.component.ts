import { ProductsDataStorageService } from '../../shared/products-data-storage.service';
import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: Product[];
  subscription: Subscription;
  
  constructor(private productsService: ProductsService,
              private productsDataStorageService: ProductsDataStorageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.productsService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
    //this.products = this.productsService.getProducts();
    this.productsDataStorageService.fetchProducts();

    
  }

  onNewProductClick(){
    this.router.navigate(['new'], { relativeTo: this.route})
  }
}
