import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PastaRecipePage } from './pasta-recipe.page';

describe('PastaRecipePage', () => {
  let component: PastaRecipePage;
  let fixture: ComponentFixture<PastaRecipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PastaRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
