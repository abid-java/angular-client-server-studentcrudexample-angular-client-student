import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  studentId: number;
  student: Student;
  isAddressEnabled = false;
  updated = false;

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private studentService: StudentService ) { }

  ngOnInit(): void {
    this.student = new Student();
    this.studentId = this.activatedRoute.snapshot.params['studentId'];

    this.studentService.getStudent(this.studentId)
                       .subscribe(data => {
                        console.log('Student with studentId : ' + this.studentId + ' is ' + JSON.stringify(data));
                        this.student = data;
                       }, error => console.log('Error Occured while retrieving Student with Id : ' + this.studentId));
  }

  updateStudent() {
    this.studentService.updateStudent(this.studentId, this.student)
                       .subscribe(data => {
                        console.log('Updated Student with studentId : ' + this.studentId + ' is ' + JSON.stringify(data));
                        this.student = new Student();
                       })
  }

  onSubmit() {
    this.updated = true;
    this.updateStudent();
  }

  studentsList() {
    this.router.navigate(['/students']);
  }

  addressLocationEnabled() {
    this.isAddressEnabled = true;
  }

}
