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
    // ou poderia repassar o id:
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route});
  }

}
