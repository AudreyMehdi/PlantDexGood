import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewCategorieComponent } from './page-new-categorie.component';

describe('PageNewCategorieComponent', () => {
  let component: PageNewCategorieComponent;
  let fixture: ComponentFixture<PageNewCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNewCategorieComponent]
    });
    fixture = TestBed.createComponent(PageNewCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
