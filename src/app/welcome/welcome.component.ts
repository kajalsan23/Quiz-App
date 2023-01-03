import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


  rules = [
   "Correct question gives you 10 Points",
    "InCorrect question gives you -10 Points",
    "You will have 10 sec to answer each questions",
    "Refreshing the page will reset"
  ]

  @ViewChild('name') nameKey!:ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value)
  }

}
