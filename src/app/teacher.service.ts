import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Teacher {
  id: number,
  firstName: string,
  lastName: string,
  skills: string[]
}

export let teachers: Teacher[] = [
  {
    id: 1,
    firstName: "James",
    lastName: "Bond",
    skills: [
      "Fighting",
      "Spying",
      "Weapons",
      "Driving"
    ]
  },
  {
    id: 2,
    firstName: "Andrzej",
    lastName: "Gołota",
    skills: [
      "Boxing",
      "Dancing",
      "Acting"
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  get_teachers() {
    return of(teachers);
  }
}
