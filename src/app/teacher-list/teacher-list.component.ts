import { Component, Input } from '@angular/core';
import { Teacher } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  template: `
    <ul>
      <li *ngFor="let teacher of teachers">{{ teacher.firstName }} {{teacher.lastName}}</li>
    </ul>
  `,
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
  @Input() teachers: Teacher[] = [];
}
