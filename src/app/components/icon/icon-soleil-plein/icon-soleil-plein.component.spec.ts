import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSoleilPleinComponent } from './icon-soleil-plein.component';

describe('IconSoleilPleinComponent', () => {
  let component: IconSoleilPleinComponent;
  let fixture: ComponentFixture<IconSoleilPleinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconSoleilPleinComponent]
    });
    fixture = TestBed.createComponent(IconSoleilPleinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
