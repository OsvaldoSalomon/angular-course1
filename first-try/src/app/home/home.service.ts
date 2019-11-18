import { EventEmitter, Injectable } from '@angular/core';

import { BandModel } from "./home.model";
import { Band } from '../shared/band.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class HomeService {
  albumSelected = new EventEmitter<Band>();

  private albums: Band[] = [
    new Band(
      'Sempiternal',
      'This is Sempiternal!'
      ),
    new Band('Big Fat Burger',
      'What else you need to say?')
  ];
}
//   constructor(private slService: ShoppingListService) {}
//
//   getRecipes() {
//     return this.recipes.slice();
//   }
//
//   addIngredientsToShoppingList(ingredients: Ingredient[]) {
//     this.slService.addIngredients(ingredients);
//   }
// }
