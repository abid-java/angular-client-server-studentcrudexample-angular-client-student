import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;
  isAddressEnabled = false;

  constructor( private studentService: StudentService,
               private router: Router ) { }

  ngOnInit(): void { }

  newStudent() {
    this.submitted = false;
    this.student = new Student();
  }

  saveStudent() {
    this.studentService.createStudent(this.student)
                       .subscribe(data => {
                          console.log('Student Created : ' + JSON.stringify(this.student));
                          this.student = new Student();
                          this.studentsList();
                       })
  }

  onSubmit() {
    this.submitted = true;
    this.saveStudent();
  }

  studentsList() {
    this.router.navigate(['students']);
  }

  addressLocationEnabled() {
    this.isAddressEnabled = true;
  }
}
