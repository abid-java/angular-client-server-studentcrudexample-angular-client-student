import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StudentListComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'addStudent', component: CreateStudentComponent },
  { path: 'updateStudent/:studentId', component: UpdateStudentComponent },
  { path: 'studentDetails/:studentId', component: StudentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
