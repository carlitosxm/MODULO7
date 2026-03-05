import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice';
import { CourseComponent } from './components/course/course';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvoiceComponent, CourseComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Invoce');
}
