import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable()
export class SubjectService {
  url:string;
  constructor(private http:HttpClient) {
    this.url = "http://usfxapp.herokuapp.com" 
  }

  getSubjects(){
    return this.http.get(this.url+'/subject')
  }
  

}
