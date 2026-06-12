import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tribute } from './tribute';

describe('Tribute', () => {
  let component: Tribute;
  let fixture: ComponentFixture<Tribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tribute],
    }).compileComponents();

    fixture = TestBed.createComponent(Tribute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
