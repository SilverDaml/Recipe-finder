import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pasta-recipe',
  templateUrl: './pasta-recipe.page.html',
  styleUrls: ['./pasta-recipe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PastaRecipePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   //method to go back to main menu
   backToMainMenu(private router: Router) {

    this.router.navigate(['/home'])
  }

}
