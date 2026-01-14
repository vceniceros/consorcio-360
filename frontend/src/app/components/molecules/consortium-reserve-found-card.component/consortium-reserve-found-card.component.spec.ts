import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsortiumReserveFoundCardComponent } from './consortium-reserve-found-card.component';

describe('ConsortiumReserveFoundCardComponent', () => {
  let component: ConsortiumReserveFoundCardComponent;
  let fixture: ComponentFixture<ConsortiumReserveFoundCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsortiumReserveFoundCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsortiumReserveFoundCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
