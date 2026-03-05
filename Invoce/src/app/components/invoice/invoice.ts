import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice';
import { Invoice } from '../model/Invoice';

@Component({
  selector: 'app-invoice',
  standalone: true,// se debe colocar para hacer imports
  imports: [],
  templateUrl: './invoice.html',
  styleUrl: './invoice.css',
})
export class InvoiceComponent implements OnInit{
  invoice!:Invoice;
  constructor(private service:InvoiceService){}
  ngOnInit(): void {
    this.invoice=this.service.getInvoice();
  }

}
