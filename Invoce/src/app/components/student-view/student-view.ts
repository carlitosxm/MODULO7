import { Component, Input } from '@angular/core';
import { Student } from '../model/Student';
import { StudentItem } from "../student-item/student-item";

@Component({
  selector: 'student-view',
  imports: [StudentItem],
  standalone:true,
  templateUrl: './student-view.html',
  styleUrl: './student-view.css',
})
export class StudentViewComponent {
  @Input()students!:Student[];
}
