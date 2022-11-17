import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAddComponent } from './dialog-edit-add.component';

describe('DialogEditAddComponent', () => {
  let component: DialogEditAddComponent;
  let fixture: ComponentFixture<DialogEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
