import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private getAllApiUrl = 'http://localhost:8080/students/getAllStudents';

  private getApiUrl = 'http://localhost:8080/students/';

  private createApiUrl = 'http://localhost:8080/students/createStudent';

  private updateApiUrl = 'http://localhost:8080/students/';

  private deleteApiUrl = 'http://localhost:8080/students/';

  constructor( private httpClient: HttpClient ) { }

  //create Student Information
  createStudent(student: Object): Observable<Object> {
    return this.httpClient.post(`${this.createApiUrl}`, student);
  }

  //get All Students
  getAllStudents(): Observable<any> {
    return this.httpClient.get(`${this.getAllApiUrl}`);
  }

  //get Student by studentId
  getStudent(studentId: number): Observable<any> {
    return this.httpClient.get(`${this.getApiUrl}/${studentId}`);
  }

  //update Student by studentId
  updateStudent(studentId: number, student: any): Observable<Object> {
    return this.httpClient.put(`${this.updateApiUrl}/${studentId}`, student);
  }

  //delete Student by Id
  deleteStudent(studentId: number): Observable<any> {
    return this.httpClient.delete(`${this.deleteApiUrl}/${studentId}`, { responseType: 'text'});
  }
}
