import { ProductsDataStorageService } from '../../shared/products-data-storage.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  product: Product;
  id: number;
  
  constructor(private productsService: ProductsService,
              private productsDataStorageService: ProductsDataStorageService,
              private route: ActivatedRoute,
              private router: Router) { }
  
  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.product = this.productsService.getProduct(this.id);
        }
      );
  }

  onEditProduct(){
    this.router.navigate(['edit'], { relativeTo: this.route});
  }

  onDeleteProduct(){
    this.productsDataStorageService.deleteProduct(this.id)
      .subscribe(
        (res: any) => {
          if(res != undefined && res.message != undefined){
            alert(res.message);
            this.router.navigate(['/produtos']);
            this.productsDataStorageService.fetchProducts();
          } else {
            alert("Erro ao tentar excluir o produto.");
          }
        }
      );
  }
}
