import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  question = {
    "question": "",
    "correct": "",
    "wrong": "",
    "fake": ""
  }
  constructor(private _httpService: HttpService, private router: Router) { }
  
  onSumbit(){
    this._httpService.createQuestion(this.question)
    .subscribe(data => { this.question = data; console.log("Surveys in dasboard", data),
              err => { console.log("error in survey retrieval",err); }});
  }
  ngOnInit() {
  }

}
