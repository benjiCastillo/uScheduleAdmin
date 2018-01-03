import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Subject } from '../model/subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable()
export class SubjectService {
  url:string;
  headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) {
    this.url = "http://usfxapp.herokuapp.com" 
  }

  getSubjects(){
    return this.http.get(this.url+'/subject')
  }
  addSubject(subject:Subject):Observable<any>{
    let data = JSON.stringify(subject);
    return this.http.post(this.url+'/addSubject',data,{headers:this.headers})
  }
  deleteSubject(id){
    return this.http.delete(this.url+'/deleteSubject/'+id);
  }
  updateSubject(subject:Subject, id:string):Observable<any>{
    let data = JSON.stringify(subject);
    return this.http.put(this.url+'/updateSubject/'+id,data,{headers:this.headers})
  }

}
