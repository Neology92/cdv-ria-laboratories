import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsApiUrl: string = 'http://localhost:4000/api/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsApiUrl);
  }

  getStudent(id: number): Observable<Student> {
    const url = `${this.studentsApiUrl}/${id}`;
    return this.http.get<Student>(url);
  }
}
