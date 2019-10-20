import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipe') recipe: Recipe;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  toShoppingList() {
    console.log(`toShoppingList clicked: ${JSON.stringify(this.recipe.ingredients)}`);
    this.shoppingService.toShoppingList.emit(this.recipe.ingredients);
  }
}
