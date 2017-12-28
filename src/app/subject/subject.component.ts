import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjectService: any;

  subjects=null;
  // subjects = [
  //   {
  //     "_id": "5a3e8c45578fbe00141c3b31",
  //       "acronym": "Desarrollo de Aplicaciones Internet Intranet",
  //       "name": "SIS - 256",
  //       "semester": 7
  //   },
  //   {
  //     "_id": "5a3e8c45578fbe00141c3b31",
  //       "acronym": "Base de Datos 3",
  //       "name": "SIS - 308",
  //       "semester": 5
  //   },
  //   {
  //     "_id": "5a3e8c45578fbe00141c3b31",
  //       "acronym": "Computacion",
  //       "name": "SIS - 100",
  //       "semester": 1
  //   },
  //   {
  //     "_id": "5a3e8c45578fbe00141c3b31",
  //       "acronym": "Sistemas Distribuidos",
  //       "name": "SIS - 258",
  //       "semester": 7
  //   },
  //   {
  //     "_id": "5a3e8c45578fbe00141c3b31",
  //       "acronym": "Fisica 1",
  //       "name": "FIS - 100",
  //       "semester": 1
  //   }
  // ]

  constructor(subjectService:SubjectService) {
    subjectService.getSubjects()
    .subscribe(data=>{
      debugger;
      this.subjects = data;
      this.subjects = Object.keys(this.subjects).map((key)=>this.subjects[key]);
    }) }

  ngOnInit() {

  }


}
