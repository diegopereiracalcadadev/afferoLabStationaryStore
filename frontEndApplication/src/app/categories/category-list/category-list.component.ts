import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { Category } from '../category.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  categories: Category[];
  
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
