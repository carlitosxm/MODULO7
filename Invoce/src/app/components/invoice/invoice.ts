// front/src/app/components/invoice/invoice.component.ts
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice';
import { Invoice } from '../../components/model/Invoice';
import { CompanyViewComponent } from "../company-view/company-view";
import { CustomerViewComponent } from "../customer-view/customer-view";
import { InvoiceDetail } from "../invoice-detail/invoice-detail";

@Component({
  selector: 'app-invoice',
  imports: [CompanyViewComponent, CustomerViewComponent, InvoiceDetail],
  templateUrl: './invoice.html',
  styleUrl: './invoice.css'
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    console.log('Intentando conectar con el backend...'); // Paso A
    this.service.getInvoice().subscribe({
      next: (data) => {
        console.log('¡Éxito! Datos recibidos:', data);
        this.invoice = data; // Aquí es cuando desaparece el "Cargando"
      },
      error: (err) => {
        console.error('Error fatal en la conexión:', err); // Paso B
        alert('Error: No se pudo contactar al servidor. Revisa la consola (F12).');
      }
    });
  }
}