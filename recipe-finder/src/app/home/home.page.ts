import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private router: Router) {}

  //method to switch to burger recipe page
  burgerRecipe() {

    this.router.navigate(['/burger-recipe'])
  }

   //method to switch to pizza recipe page
   pizzaRecipe() {

    this.router.navigate(['/pizza-recipe'])
  }

   //method to switch to pasta recipe page
   pastaRecipe() {

    this.router.navigate(['/pasta-recipe'])
  }
}
