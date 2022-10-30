import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportAviationComponent } from './transport-aviation.component';

describe('TransportAviationComponent', () => {
  let component: TransportAviationComponent;
  let fixture: ComponentFixture<TransportAviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportAviationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransportAviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
