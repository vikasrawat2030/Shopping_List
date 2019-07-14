import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test Description', 'https://cdn.pixabay.com/photo/2018/05/30/23/18/macaroon-3442801_960_720.jpg',[
            new Ingredient('Burger',1),
            new Ingredient('French Fries',2)
        ]),
        new Recipe('Test Recipe 2', 'Test Description 2', 'https://cdn.pixabay.com/photo/2018/05/30/23/18/macaroon-3442801_960_720.jpg',[
            new Ingredient('Icecream',2)
        ])
      ];

      constructor(private shoppingListService: ShoppingListService){

      }


    getRecipes(){
        return this.recipes.slice();
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}