import { Component, Input } from '@angular/core';
import { Student } from '../model/Student';

@Component({
  selector: '<tr [student-item]',
  imports: [],
  standalone:true,
  templateUrl: './student-item.html',
  styleUrl: './student-item.css',
})
export class StudentItem {
  @Input()item!:Student;
}
