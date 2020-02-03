import { Action } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ]
};
 
export function shoppingListReducer(state = initialState, action: Action) {
  switch(action.type) {
    case 'ADD_INGREDIENT':      
      return {
        ...state,
        ingredient: [...state.ingredients, action]
      };
  }
}