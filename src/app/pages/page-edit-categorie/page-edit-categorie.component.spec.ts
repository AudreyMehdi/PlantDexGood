import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditCategorieComponent } from './page-edit-categorie.component';

describe('PageEditCategorieComponent', () => {
  let component: PageEditCategorieComponent;
  let fixture: ComponentFixture<PageEditCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEditCategorieComponent]
    });
    fixture = TestBed.createComponent(PageEditCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
