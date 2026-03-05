import { Injectable } from '@angular/core';
import { Invoice } from '../components/model/Invoice';
import { invoiceData } from '../data/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoice:Invoice=invoiceData;
  constructor(){}
    getInvoice():Invoice{
      return this.invoice;
    }
}
