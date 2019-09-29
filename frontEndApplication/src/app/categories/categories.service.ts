import { Category } from './category.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CategoriesService {
    
    categoriesChanged = new Subject<Category[]>();
    categorySelected = new EventEmitter<Category>();

    private categories: Category[] = [];
    
    constructor() { }
    
    getCategories() {
        return this.categories.slice();
    }
    
    setCategories(categories: Category[]) {
        this.categories = categories;
        this.categoriesChanged.next(this.categories.slice());
    }
    
    getCategory(id: number) {
        return this.categories[id];
    }
    
    create(category: Category) {
        console.log('create', category);
    }
} 