import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Chart } from 'chart.js';
import { ResultService } from './result.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [ResultService]
})
export class ResultComponent implements OnInit {
  @ViewChild('barChart', {static: true}) barChart;
  bars: any;
  colorArray: any;
  chartData : any;
  activeText : string;
  confirmedText : string;
  deathText : string;
  recoveredText : string;
  risk: string = '';
  highFlag : boolean =false;
  constructor(public resultService : ResultService,private router: Router) { }

  ngOnInit() {
    this.risk = localStorage.getItem("risk");
    console.log(this.risk);
    if (this.risk == 'HIGH'){
      this.highFlag = true;
    }else{
      this.highFlag = false;
    }
  }
  ionViewDidEnter() {
    this.getData();
    
  }
  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }
  fetchLatest(){
    this.getData();
  }
  getData(){
    this.resultService.getChart().subscribe((data: any)=>{
      data.statewise.forEach(element => {
        if(element.state == "Tamil Nadu"){
          this.chartData = element;
          this.activeText = 'Active  (' + this.chartData.active + ')'
          this.deathText = 'Death  (' + this.chartData.deaths + ')'
          this.confirmedText = 'Confirmed  (' + this.chartData.confirmed + ')'
          this.recoveredText = 'Recovered  (' + this.chartData.recovered + ')'
          console.log(this.chartData);
          this.createBarChart();
        }
      });
    } , error => alert("invalid otp!"))
    
  }
  testAgain(){
    this.router.navigateByUrl("/questions");
  }
  changeAlert(){
    this.router.navigateByUrl("/user-name")
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: [this.activeText, this.confirmedText, this.deathText, this.recoveredText],
        datasets: [{
          label: 'Viewers in millions',
          data: [this.chartData.active, this.chartData.confirmed, this.chartData.deaths, this.chartData.recovered],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)"
          ], // array should have same number of elements as number of dataset
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)"
          ],// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          
        }
      }
    });
  }
}
