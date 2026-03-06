import { Component, Input } from '@angular/core';
import { Customer } from '../model/Customer';

@Component({
  selector: 'customer-view',
  imports: [],
  standalone:true,
  templateUrl: './customer-view.html',
  styleUrl: './customer-view.css',
})
export class CustomerViewComponent {
  @Input()customer!:Customer;
}
