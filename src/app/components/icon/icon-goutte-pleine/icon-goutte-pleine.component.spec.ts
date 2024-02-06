import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGouttePleineComponent } from './icon-goutte-pleine.component';

describe('IconGouttePleineComponent', () => {
  let component: IconGouttePleineComponent;
  let fixture: ComponentFixture<IconGouttePleineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconGouttePleineComponent]
    });
    fixture = TestBed.createComponent(IconGouttePleineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
