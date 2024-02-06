import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGoutteVideComponent } from './icon-goutte-vide.component';

describe('IconGoutteVideComponent', () => {
  let component: IconGoutteVideComponent;
  let fixture: ComponentFixture<IconGoutteVideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconGoutteVideComponent]
    });
    fixture = TestBed.createComponent(IconGoutteVideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
