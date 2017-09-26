import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  question_id : string;
  answer = {"name": "",
            "answer": "",
            "support": ""
            }
  question;
  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private router: Router) { }
  onSumbit(){
    this._httpService.addAnswer(this.answer, this.question_id)
    .subscribe(data => { this.answer = data; console.log("Surveys in dasboard", data),
              err => { console.log("error in survey retrieval",err); }});
              this.router.navigateByUrl('/');
  }
  ngOnInit() {
    this._route.params.subscribe((param)=>{
      console.log("this is param",param.id);
      this.question_id = param.id;
      this._httpService.retrieveOne(this.question_id)
      .subscribe(
          data=>{this.question = data; console.log("Q:",this.question),
          err=>{console.log("err in retrieving one Q", err);}})
    })
  }

}
