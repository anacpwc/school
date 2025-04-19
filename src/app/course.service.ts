import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUrl = "http://localhost:3000/courses";

  constructor(private http: HttpClient) { }

  getCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl);
  }

  saveCourse(course: Course): Observable<Course>{
    return this.http.post<Course>(this.apiUrl, course);
  }
}
