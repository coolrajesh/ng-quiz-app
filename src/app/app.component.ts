import { Component } from '@angular/core';
import questionData from '../app/files/questions.json';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';
  answerArray = [];
	allQuestions:any[]=questionData;
  currentIndex=0;
  currentQuestion:any='';
  counter:number=0;   
  ngOnInit(){
    
    console.log(this.allQuestions);
    this.currentQuestion  = this.allQuestions[this.currentIndex].question;

  }
  nextQuestion(){
      this.counter++;
      this.currentIndex = this.counter;
      this.currentQuestion  = this.allQuestions[this.currentIndex].question;
  }

  prevQuestion(){
    this.counter--;    
    this.currentIndex = this.counter;
    this.currentQuestion  = this.allQuestions[this.currentIndex].question;
}
}
