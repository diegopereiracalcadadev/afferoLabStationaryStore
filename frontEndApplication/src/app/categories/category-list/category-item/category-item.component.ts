import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../../category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent   {

  @Input() category: Category;

}
