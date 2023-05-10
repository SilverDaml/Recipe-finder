import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pizza-recipe',
  templateUrl: './pizza-recipe.page.html',
  styleUrls: ['./pizza-recipe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PizzaRecipePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

   //method to go back to main menu
   backToMainMenu() {

    this.router.navigate(['/home'])
  }

}
