import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewPlanteComponent } from './page-new-plante.component';

describe('PageNewPlanteComponent', () => {
  let component: PageNewPlanteComponent;
  let fixture: ComponentFixture<PageNewPlanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNewPlanteComponent]
    });
    fixture = TestBed.createComponent(PageNewPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
