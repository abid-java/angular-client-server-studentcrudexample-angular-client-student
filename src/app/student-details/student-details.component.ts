import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentId: number;
  student: Student;

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private studentService: StudentService ) { }

  ngOnInit(): void {
    this.student = new Student();
    this.studentId = this.activatedRoute.snapshot.params['studentId'];
    this.studentService.getStudent(this.studentId)
                       .subscribe(data => {
                          console.log('Student Details with Student Id : ' + this.studentId);
                          this.student = data;
                       }, error => console.log('Error Occured while retrieving Student Details : ' + error));
  }

  studentsList() {
    this.router.navigate(['students']);
  }

}
