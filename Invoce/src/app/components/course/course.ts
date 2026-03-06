import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { CourseServices } from '../../services/course';
import { StudentViewComponent } from "../student-view/student-view";

@Component({
  selector: 'app-course',
  standalone: true,// se debe colocar para hacer imports
  imports: [StudentViewComponent],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class CourseComponent implements OnInit {
  course!:Course;
  constructor(private service:CourseServices){}
  ngOnInit(): void {
    this.course=this.service.getCourse();
  }
}
