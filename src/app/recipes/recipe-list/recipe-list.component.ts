import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://cdn.pixabay.com/photo/2018/05/30/23/18/macaroon-3442801_960_720.jpg'),
    new Recipe('Test Recipe 2', 'Test Description 2', 'https://cdn.pixabay.com/photo/2018/05/30/23/18/macaroon-3442801_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
