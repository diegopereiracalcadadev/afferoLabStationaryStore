import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category.model';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  
  category: Category;
  id: number;
  
  constructor(private categoriesService: CategoriesService,
              private dataStorageService: DataStorageService,
              private route: ActivatedRoute,
              private router: Router) { }
  
  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log("params", params);
          this.category = this.categoriesService.getCategory(this.id);
        }
      );
  }

  onEditCategory(){
    this.router.navigate(['edit'], { relativeTo: this.route});
  }

  onDeleteCategory(){
    this.dataStorageService.deleteCategory(this.id)
      .subscribe(
        (res) => {
          console.log(res);
          if(res != undefined && res.message != undefined){
            alert(res.message);
            this.router.navigate(['/categorias']);
            this.dataStorageService.fetchCategories();
          }
        }
      );
  }
}
