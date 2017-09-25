import { Component } from '@angular/core';
import { HttpService } from './http.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  question = {
    "question": "",
    "correct": "",
    "wrong": "",
    "fake": ""
  }

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    
  }

onSubmit(){
  console.log("this is the data:,",this.question);
  console.log("submitted");
    this._httpService.createQuestion(JSON.stringify(this.question))
    .subscribe( (params)=> console.log("Inside service createQuestion params:", params) )
    this.router.navigate(['/']);
  }
  
}
