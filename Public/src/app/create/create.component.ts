import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  question = {
    "question": "",
    "description": ""
  }
  constructor(private _httpService: HttpService, private router: Router) { }
  
  onSumbit(){
    this._httpService.createQuestion(this.question)
    .subscribe(data => { this.question = data; console.log("Surveys in dasboard", data),
              err => { console.log("error in survey retrieval",err); }});
              this.router.navigateByUrl('/');
  }
  ngOnInit() {
  }

}
