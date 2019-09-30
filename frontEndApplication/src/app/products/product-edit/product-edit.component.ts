import { CategoriesDataStorageService } from './../../shared/categories-data-storage.service';
import { Category } from './../../categories/category.model';
import { ProductsDataStorageService } from '../../shared/products-data-storage.service';
import { ProductsService } from '../products.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
  editMode: boolean = false;
  categories: Category[];

  id: number;
  codBarras: string = '';
  description: string = '';
  categoryId: number = 0;
  
  constructor(private route: ActivatedRoute,
    private productsService: ProductsService,
    private productsDataStorageService: ProductsDataStorageService,
    private categoriesDataStorageService: CategoriesDataStorageService,
    private router: Router) { }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.productsDataStorageService
          
          if (this.editMode) {
            let product = this.productsService.getProduct(this.id);
            this.codBarras = product.codBarras;
            this.description = product.description;
            this.categoryId = product.categoryId;
          }
        }
      )

    this.categoriesDataStorageService.getCategories()
        .subscribe(
          (categories) => {
            console.log("foi", categories);
            this.categories = categories;
          }
        );

  }

  onSubmit(form: NgForm) {
    if(this.editMode){
      form.value.id = this.id;
      this.productsDataStorageService.updateProduct(form.value)
      .subscribe(
        (opa: any) => {
          if(opa != undefined && opa.id != undefined){
            alert("Produto cadastrado");
            this.productsDataStorageService.fetchProducts();
            this.router.navigate(['/produtos']);
          } else {
            let errorMessage = "Houve um erro ao tentar cadastrar o produto";
            alert(errorMessage);
            console.log(errorMessage, opa);
          }
        }
      );
    } else {
      this.productsDataStorageService.createProduct(form.value)
        .subscribe(
          (opa: any) => {
            if(opa != undefined && opa.id != undefined){
              alert("Produto cadastrado");
              this.productsDataStorageService.fetchProducts();
              this.router.navigate(['/produtos']);
            } else {
              let errorMessage = "Houve um erro ao tentar cadastrar o produto";
              alert(errorMessage);
              console.log(errorMessage, opa);
            }
          }
        );
    }
  }
}