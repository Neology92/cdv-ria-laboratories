import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentService } from './student.service';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  declarations: [AppComponent, StudentsComponent, StudentDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
