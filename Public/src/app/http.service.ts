import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  createQuestion(question) {
    console.log("im inside the createQuestion of service:", question)
    return this._http.post('/api/all', question)
    .map( data => data.json() )
  }
  addAnswer(answer, id) {
    console.log("im inside the addAnswer of service:", answer)
    return this._http.post(`/api/${id}`, answer)
    .map( data => data.json() )
  }
  retrieveOne(id){
    console.log("in httpservice retirveOne")
    return this._http.get(`/api/${id}`)
    .map( data => data.json() )
  }
  retrieveQuestions(){
    console.log("in httpservice retirveQuestions")
    return this._http.get('/api/all')
    .map( data => data.json() )
  }
  // addLike(id){
  //   console.log('in service like');
  //   return this._http.get(`/api/like/${id}`)
  //   .map( data => data.json())
  // }
}