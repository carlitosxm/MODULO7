import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { CourseServices } from '../../services/course';

@Component({
  selector: 'app-course',
  standalone: true,// se debe colocar para hacer imports
  imports: [],
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
