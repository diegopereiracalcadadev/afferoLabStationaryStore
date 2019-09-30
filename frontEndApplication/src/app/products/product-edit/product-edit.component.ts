import { DataStorageService } from '../../shared/products-data-storage.service';
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

  id: number;
  title: string = '';
  description: string = '';
  
  constructor(private route: ActivatedRoute,
    private productsService: ProductsService,
    private dataStorageService: DataStorageService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          
          if (this.editMode) {
            let product = this.productsService.getProduct(this.id);
            this.title = product.title;
            this.description = product.description;
          }
        }
      )
  }

  onSubmit(form: NgForm) {
    if(this.editMode){
      form.value.id = this.id;
      this.dataStorageService.updateProduct(form.value)
      .subscribe(
        (opa: any) => {
          if(opa != undefined && opa.id != undefined){
            alert("Produto cadastrada");
            this.dataStorageService.fetchProducts();
            this.router.navigate(['/produtos']);
          } else {
            let errorMessage = "Houve um erro ao tentar cadastrar o produto";
            alert(errorMessage);
            console.log(errorMessage, opa);
          }
        }
      );
    } else {
      this.dataStorageService.createProduct(form.value)
        .subscribe(
          (opa: any) => {
            if(opa != undefined && opa.id != undefined){
              alert("Produto cadastrada");
              this.dataStorageService.fetchProducts();
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