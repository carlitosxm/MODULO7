import { Injectable } from '@angular/core';
import { Course } from '../components/model/Course';
import { schoolData } from '../data/school';

@Injectable({
  providedIn: 'root',
})
export class CourseServices {
  private course: Course = schoolData;
  constructor() { }
  getCourse(): Course {
    return this.course;
  }
}
