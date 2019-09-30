import { ProductsService } from './products/products.service';
import { CategoriesService } from './categories/categories.service';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CategoryItemComponent } from './categories/category-list/category-item/category-item.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryHomeComponent } from './categories/category-home/category-home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductHomeComponent } from './products/product-home/product-home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    CategoryHomeComponent,
    CategoryListComponent,
    CategoryEditComponent,
    CategoryItemComponent,
    CategoryDetailComponent,
    ProductsComponent,
    ProductHomeComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductItemComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoriesService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
