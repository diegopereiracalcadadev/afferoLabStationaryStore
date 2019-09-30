import { ProductsService } from '../products/products.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../products/product.model';


@Injectable({ providedIn: 'root' })
export class ProductsDataStorageService {
  constructor(private http: HttpClient,
              private productsService: ProductsService) { }
 
    fetchProducts() {
      this.http
        .get<any[]>(
          'http://localhost:4200/rest/products'

        )
        .subscribe(products => {
          this.productsService.setProducts(products)
        });
    }
  
    createProduct(product: Product): Observable<any> {
      console.log('DataStorageService - Trying to create a product... ', product);
      return this.http
        .put(`http://localhost:4200/rest/products/new?codBarras=${product.codBarras}&name=${product.name}&description=${product.description}&quantity=${product.quantity}&category_id=${product.categoryId}`, {});
    }
  
    updateProduct(product: Product): Observable<any> {
      return this.http
        .put(`http://localhost:4200/rest/products/${product.id}/edit?codBarras=${product.codBarras}&name=${product.name}&description=${product.description}&quantity=${product.quantity}&category_id=${product.categoryId}`, {});

    }
  
    deleteProduct(id: number) {
      return this.http
        .delete(`http://localhost:4200/rest/products/${id}`, {});
    }
  

}