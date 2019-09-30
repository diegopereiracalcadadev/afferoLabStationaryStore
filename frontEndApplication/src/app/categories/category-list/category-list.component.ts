import { CategoriesDataStorageService } from '../../shared/categories-data-storage.service';
import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { Category } from '../category.model';
import { CategoriesService } from '../categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  categories: Category[];
  subscription: Subscription;
  
  constructor(private categoriesService: CategoriesService,
              private dataStorageService: CategoriesDataStorageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.categoriesService.categoriesChanged
      .subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        }
      );
      
    this.dataStorageService.fetchCategories();
  }

  onNewCategoryClick(){
    this.router.navigate(['new'], { relativeTo: this.route})
  }
}
