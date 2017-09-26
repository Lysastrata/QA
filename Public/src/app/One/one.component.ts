import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  question_id;
  question;

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private router: Router) { 
    
  }
  
    ngOnInit() {
      this._route.params.subscribe((param)=>{
        console.log("this is param",param.id);
        this.question_id = param.id;
        this._httpService.retrieveOne(this.question_id)
        .subscribe(
            data=>{this.question = data; console.log("A:",this.question.answers),
            err=>{console.log("err in retrieving one Q", err);}})
      })
    console.log(this.question.answers[0]);
    
    }
    like(){
      
    }
}
