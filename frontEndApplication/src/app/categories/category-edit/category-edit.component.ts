import { DataStorageService } from './../../shared/data-storage.service';
import { CategoriesService } from './../categories.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;

  title: string;
  description: string;

  constructor(private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private dataStorageService: DataStorageService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;

          if (this.editMode) {
            console.log("modo de edição ativado");
            let category = this.categoriesService.getCategory(this.id);
            this.title = category.title;
            this.description = category.description;
          }
        }
      )
  }

  onSubmit(form: NgForm) {
    this.dataStorageService.createCategory(form.value)
      .subscribe(
        (opa: any) => {
          if(opa != undefined && opa.id != undefined){
            alert("Categoria cadastrada");
            this.router.navigate(['/categorias']);
          } else {
            let errorMessage = "Houve um erro ao tentar cadastrar a categoria";
            alert(errorMessage);
            console.log(errorMessage, opa);
          }
        }
      );
  }
}