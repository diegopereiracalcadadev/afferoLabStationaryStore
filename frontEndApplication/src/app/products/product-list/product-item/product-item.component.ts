import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../product.model';

import { ProductsService } from '../../products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit  {
  
  @Input() product: Product;
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
