import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbsTableComponent } from './tbs-table.component';

describe('TbsTableComponent', () => {
  let component: TbsTableComponent;
  let fixture: ComponentFixture<TbsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TbsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TbsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
