import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions = [];
  show = [];
  score = {
      "name": "",
      "score":0,
    };
  s0;
  s1;
  s2;
  constructor(private _httpService: HttpService, private router: Router) { }
  
    ngOnInit() {
      console.log("dashbaord loaded comp")
      this._httpService.retrieveQuestions()
      .subscribe(data => { this.questions = data; console.log("Surveys in dasboard", data),
                err => { console.log("error in survey retrieval",err); }});
      for (var i = 0; i < 3; i++) {
        this.show.push(Math.floor(Math.random()*this.questions.length))
        
      }
      
    }
    onSumbit(){
      if (this.s0) {
        this.score.score ++
      };
      if (this.s1) {
        this.score.score ++
      };
      if (this.s2) {
        this.score.score ++
      };
      this._httpService.addScore(this.score)
      .subscribe(data => { this.questions = data; console.log("Surveys in dasboard", data),
                err => { console.log("error in survey retrieval",err); }});
                this.router.navigateByUrl('/');
    }
}
