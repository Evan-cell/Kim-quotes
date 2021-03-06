import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCardsComponent } from './quote-cards.component';

describe('QuoteCardsComponent', () => {
  let component: QuoteCardsComponent;
  let fixture: ComponentFixture<QuoteCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
