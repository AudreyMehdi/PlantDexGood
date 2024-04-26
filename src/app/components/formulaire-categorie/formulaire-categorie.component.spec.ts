import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCategorieComponent } from './formulaire-categorie.component';

describe('FormulaireCategorieComponent', () => {
  let component: FormulaireCategorieComponent;
  let fixture: ComponentFixture<FormulaireCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireCategorieComponent]
    });
    fixture = TestBed.createComponent(FormulaireCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
