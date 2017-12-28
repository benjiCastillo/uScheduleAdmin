import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { TeacherComponent } from './teacher/teacher.component';
import { Routes, RouterModule } from "@angular/router";
import { SubjectComponent } from './subject/subject.component';
import { SubjectService } from './services/subject.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '',component: SubjectComponent },
  { path: 'subject',component: SubjectComponent },
  { path: 'teacher', component:TeacherComponent },
  {path: '**', component: SubjectComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
