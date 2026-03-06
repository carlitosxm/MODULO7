import { Component, Input } from '@angular/core';
import { Company } from '../model/Company';

@Component({
  selector: 'company-view',
  imports: [],
  standalone: true,
  templateUrl: './company-view.html',
  styleUrl: './company-view.css',
})
export class CompanyViewComponent {
  @Input()company!:Company;
}
