import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  
  category: Category;
  
  constructor(private route: ActivatedRoute,
              private router: Router) { }
  
  ngOnInit(): void {
        
  }


}
