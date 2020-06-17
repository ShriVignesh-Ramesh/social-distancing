import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
  name:string = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
  }
  startSurvey(){
    localStorage.setItem("surveyCompleted","true");
    this.router.navigateByUrl("/questions");
  }
  skipSurvey(){
    localStorage.setItem("surveyCompleted","false");
    this.router.navigateByUrl("/result");
    
  }

}
