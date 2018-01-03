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
import { DialogAddSubjectComponent } from './dialogs/dialog-add-subject/dialog-add-subject.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogMessageComponent } from './dialogs/dialog-message/dialog-message.component';

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
    SubjectComponent,
    DialogAddSubjectComponent,
    DialogMessageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SubjectService, DialogAddSubjectComponent, DialogMessageComponent ],
  entryComponents:[DialogAddSubjectComponent,DialogMessageComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
