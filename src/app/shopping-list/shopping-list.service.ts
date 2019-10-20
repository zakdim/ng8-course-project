import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  toShoppingList = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  constructor() {
    this.toShoppingList
      .subscribe((ingredients: Ingredient[]) => {
        console.log(`recieved toShoppingList event: ${JSON.stringify(ingredients)}`);
        this.addIngredients(ingredients);
      });
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  private addIngredients(ingredients: Ingredient[]) {
    console.log(`add ingredients ${JSON.stringify(ingredients)}`);
    ingredients.forEach(i => {
      this.ingredients.push(i);
    });
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
