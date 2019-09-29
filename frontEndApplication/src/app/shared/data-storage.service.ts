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
}
