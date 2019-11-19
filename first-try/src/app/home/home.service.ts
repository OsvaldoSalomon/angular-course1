import { EventEmitter, Injectable } from '@angular/core';

import { HomeModel } from "./home.model";
import { Songs } from '../shared/songs.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class HomeService {
  albumSelected = new EventEmitter<Songs>();

  private albums: Songs[] = [
    new HomeModel(
      'Sempiternal',
      'This is Sempiternal!',
      'https://townsquare.media/site/366/files/2013/02/BMTH-Sempiternal.jpg',
      [
        new Songs('Shadow Moses')
      ]),
    new HomeModel(
      'amo',
      'Latest album',
      'https://cdn.dribbble.com/users/1150494/screenshots/6117720/amo_v2_2x.jpg',
      [
        new Songs('sugar, honey, ice & tea')
      ])
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
