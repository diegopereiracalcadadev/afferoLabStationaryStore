import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  selectedCategory: Category;
  
  constructor(private categoriesService: CategoriesService) { }
  
  ngOnInit(): void {
    this.categoriesService.categorySelected
      .subscribe(
        (category: Category) => {
          console.log("evento capturado: categorySelected", category);
          this.selectedCategory = category;
        }
      );
  }
}
