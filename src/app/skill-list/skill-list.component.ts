import { Component, Input } from '@angular/core';
import { Teacher } from '../teacher.service';

@Component({
  selector: 'app-skill-list',
  template: `
    <h4>Skill List:</h4>
    <ul>
      <li *ngFor="let teacher of teachers">
        <ul>
          {{ teacher.firstName }} {{teacher.lastName}}:
          <li *ngFor="let skill of teacher.skills; let i = index" [attr.data-index]="i">
            <ul>
              {{skill}}
              <button (click)="on_delete(teacher, i)">X</button>
            </ul>
          </li>
</ul>
      </li>
    </ul>
  `,
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent {
  @Input() teachers: Teacher[] = [];

  on_delete(teacher: Teacher, skill_index: number)
  {
    teacher.skills.splice(skill_index, 1);
  }
}
