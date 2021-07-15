import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReveiwCardComponent } from './reveiw-card.component';

describe('ReveiwCardComponent', () => {
  let component: ReveiwCardComponent;
  let fixture: ComponentFixture<ReveiwCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReveiwCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReveiwCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
