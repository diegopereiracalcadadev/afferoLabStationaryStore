import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CategoryItemComponent } from './categories/category-list/category-item/category-item.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryHomeComponent } from './categories/category-home/category-home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    CategoryHomeComponent,
    CategoryListComponent,
    CategoryEditComponent,
    CategoryItemComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
