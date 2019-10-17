import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg') 
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}