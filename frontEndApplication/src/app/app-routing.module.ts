import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryHomeComponent } from './categories/category-home/category-home.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductHomeComponent } from './products/product-home/product-home.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'categorias', pathMatch: 'full' },
  {path: 'categorias', component: CategoriesComponent, children:[
      {path: '', component: CategoryHomeComponent },
      {path: 'new', component: CategoryEditComponent }, // Tem que vir antes da rota do ID 
      {path: ':id', component: CategoryDetailComponent }, // para o Angular não interpretar como um parÂmetro
      {path: ':id/edit', component: CategoryEditComponent },
  ]},
  {path: 'produtos', component: ProductsComponent, children:[
      {path: '', component: ProductHomeComponent },
      {path: 'new', component: ProductEditComponent }, 
      {path: ':id', component: ProductDetailComponent }, 
      {path: ':id/edit', component: ProductEditComponent },
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
