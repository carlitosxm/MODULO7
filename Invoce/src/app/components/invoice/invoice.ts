import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice';
import { Invoice } from '../model/Invoice';
import { CompanyViewComponent } from "../company-view/company-view";
import { CustomerViewComponent } from "../customer-view/customer-view";
import { InvoiceDetail } from "../invoice-detail/invoice-detail";

@Component({
  selector: 'app-invoice',
  standalone: true,// se debe colocar para hacer imports
  imports: [CompanyViewComponent, CustomerViewComponent, InvoiceDetail],
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
