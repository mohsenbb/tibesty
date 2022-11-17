import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsTransAviComponent } from './ins-trans-avi.component';

describe('InsTransAviComponent', () => {
  let component: InsTransAviComponent;
  let fixture: ComponentFixture<InsTransAviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsTransAviComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsTransAviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
