import { Component } from '@angular/core';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teachers: any[] = [];

  constructor(private teacherService: TeacherService) {
    this.teacherService.get_teachers().subscribe(x => this.teachers = x);
  }

}
