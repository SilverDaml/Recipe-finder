import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
 
  {
    path: 'burger-recipe',
    loadComponent: () => import('./burger-recipe/burger-recipe.page').then( m => m.BurgerRecipePage)
  },
  {
    path: 'pizza-recipe',
    loadComponent: () => import('./pizza-recipe/pizza-recipe.page').then( m => m.PizzaRecipePage)
  },
  {
    path: 'pasta-recipe',
    loadComponent: () => import('./pasta-recipe/pasta-recipe.page').then( m => m.PastaRecipePage)
  },
];
