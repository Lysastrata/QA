import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

scores = [];
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    console.log("dashbaord loaded comp")
    this._httpService.retrieveScores()
    .subscribe(data => { this.scores = data; console.log("Surveys in dasboard", data),
              err => { console.log("error in survey retrieval",err); }})

  }
}