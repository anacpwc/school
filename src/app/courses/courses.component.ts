import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent implements OnInit{


  courses: Course[] = [];
  formGroupCourse : FormGroup;

  constructor(private service: CourseService, 
  private formBuilder: FormBuilder
  ){
    this.formGroupCourse = formBuilder.group({
      id:[''],
      name:[''],
      price:[''],
      active:[''],
      promotion:['']
    });
  }

  ngOnInit(): void {
     this.service.getCourses().subscribe({
        next: json => this.courses = json
     });
  }
    save() {
    this.service.saveCourse(this.formGroupCourse.value).subscribe({
      next: json => {
        this.courses.push(json);
        this.formGroupCourse.reset();
      }
    }
    )
    }
}





