import { Product } from './product.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ProductsService {
    
    productsChanged = new Subject<Product[]>();
    productSelected = new EventEmitter<Product>();

    private products: Product[] = [];
    
    constructor() { }
    
    getProducts() {
        return this.products.slice();
    }
    
    setProducts(products: Product[]) {
        this.products = products;
        this.productsChanged.next(this.products.slice());
    }
    
    getProduct(id: number) {
        return this.products.filter((product) => {
            return id == product.id;
        })[0];
    }
    
    create(product: Product) {
    }
} 