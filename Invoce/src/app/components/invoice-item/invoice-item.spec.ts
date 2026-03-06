import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceItem } from './invoice-item';

describe('InvoiceItem', () => {
  let component: InvoiceItem;
  let fixture: ComponentFixture<InvoiceItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceItem],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
