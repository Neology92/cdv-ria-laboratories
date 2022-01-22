import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applicaiton/json' }),
};

interface ResponseArray {
  data: Student[];
}
interface ResponseEntity {
  data: Student;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsApiUrl: string = 'http://localhost:4000/api/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http
      .get<ResponseArray>(this.studentsApiUrl)
      .pipe(map(({ data }: ResponseArray) => data));
  }

  getStudent(id: number): Observable<Student> {
    const url = `${this.studentsApiUrl}/${id}`;
    return this.http
      .get<ResponseEntity>(url)
      .pipe(map(({ data }: ResponseEntity) => data));
  }

  updateStudent(student: Student): Observable<any> {
    const url = `${this.studentsApiUrl}/${student.id}`;
    return this.http
      .put(url, student, httpOptions)
      .pipe(map(({ data }: any) => data));
  }

  createStudent(student: Student): Observable<Student> {
    return this.http
      .post<ResponseEntity>(this.studentsApiUrl, student, httpOptions)
      .pipe(map(({ data }: ResponseEntity) => data));
  }

  deleteStudent(student: Student | number): Observable<Student> {
    const id = typeof student === 'number' ? student : student.id;
    const url = `${this.studentsApiUrl}/${id}`;
    return this.http
      .delete<ResponseEntity>(url, httpOptions)
      .pipe(map(({ data }: ResponseEntity) => data));
  }
}
