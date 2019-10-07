import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Pizza',
  //     'It is just awesome!',
  //     'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc23cd051d2249a5903d25faf8eeee4c/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg',
  //     [
  //       new Ingredient('Dough', 1),
  //       new Ingredient('Cheese', 2),
  //       new Ingredient('Tomato sauce', 1),
  //       new Ingredient('Pepperoni', 1)
  //     ]),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'What else do you need to say?',
  //     'https://www.tasteofhome.com/wp-content/uploads/2018/01/Scrum-Delicious-Burgers_EXPS_CHMZ19_824_B10_30_2b.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 2),
  //       new Ingredient('Cheese', 2),
  //       new Ingredient('Vegetables', 2)
  //     ])
  // ];

  private recipes: Recipe[] = [];
  constructor(
    private slService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1 );
    this.recipesChanged.next(this.recipes.slice());
  }
}
