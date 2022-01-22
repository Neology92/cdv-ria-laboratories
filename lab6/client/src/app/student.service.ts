import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  students: Student[] = [
    { id: 1, index: 123456, firstName: 'Marek', lastName: 'Wojciechowski' },
    { id: 2, index: 123457, firstName: 'Krzysztof', lastName: 'Jankiewicz' },
  ];

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }
}
