import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaRecipePage } from './pizza-recipe.page';

describe('PizzaRecipePage', () => {
  let component: PizzaRecipePage;
  let fixture: ComponentFixture<PizzaRecipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PizzaRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
