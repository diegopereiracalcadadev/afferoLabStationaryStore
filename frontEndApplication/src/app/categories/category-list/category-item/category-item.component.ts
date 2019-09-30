import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../../category.model';

import { CategoriesService } from '../../categories.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit  {
  
  @Input() category: Category;
  @Input() idx: number;
  
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log("edit moudou...", params );
        }
      );
  }



}
