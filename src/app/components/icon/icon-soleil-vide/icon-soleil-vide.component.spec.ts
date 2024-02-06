import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSoleilVideComponent } from './icon-soleil-vide.component';

describe('IconSoleilVideComponent', () => {
  let component: IconSoleilVideComponent;
  let fixture: ComponentFixture<IconSoleilVideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconSoleilVideComponent]
    });
    fixture = TestBed.createComponent(IconSoleilVideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
