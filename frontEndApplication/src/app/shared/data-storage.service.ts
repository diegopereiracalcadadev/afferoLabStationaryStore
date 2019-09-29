import { Category } from './../categories/category.model';
import { CategoriesService } from './../categories/categories.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient,
    private categoriesService: CategoriesService) { }

  fetchCategories() {
    this.http
      .get<Category[]>(
        'http://localhost:4200/categories'
      )
      .subscribe(categories => {
        this.categoriesService.setCategories(categories)
      });
  }

  createCategory(category: Category): Observable<any> {
    console.log('DataStorageService - Trying to create a category... ', category);
    return this.http
      .put(`http://localhost:4200/categories/new?title=${category.title}&description=${category.description}`, {});
  }
}