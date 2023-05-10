import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BurgerRecipePage } from './burger-recipe.page';

describe('BurgerRecipePage', () => {
  let component: BurgerRecipePage;
  let fixture: ComponentFixture<BurgerRecipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BurgerRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
