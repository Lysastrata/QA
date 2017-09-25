import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  createQuestion(question) {
    console.log("im inside the createQuestion of service:", question)
    return this._http.post('/api/questions/create', question)
    .map( data => data.json() )
  }
  addScore(score) {
    console.log("im inside the addScore of service:", score)
    return this._http.post('/api/scores/create', score)
    .map( data => data.json() )
  }
  retrieveScores(){
    console.log("in httpservice retirveScores")
    return this._http.get('/api/scores')
    .map( data => data.json() )
  }
  retrieveQuestions(){
    console.log("in httpservice retirveQuestions")
    return this._http.get('/api/questions')
    .map( data => data.json() )
  }
}