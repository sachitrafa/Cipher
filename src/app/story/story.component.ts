import { Component, OnInit } from '@angular/core';
import {IntroComponent} from '../intro/intro.component';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  public name: String;
  public ans1 = false;
  public ans0 = true;
  public ans2 = false;
  public ans3 = false;
  public ans4 = false;
  public ans5 = false;
  public score: number;
  public over = false;
  public hint1 = false;
  public hint2 = false;
  public hint3 = false;
  public hint4 = false;
  public hint5 = false;

  constructor(private intro: IntroComponent) { }

  ngOnInit(): void {
    this.name = this.intro.name;
    this.score = this.intro.score
    
  }
  oneClickSubmit(data){
    if(data.name.trim().toLowerCase()=='gagarina bvd'||data.name.trim().toLowerCase()=='gagarinabvd'||data.name.trim().toLowerCase()=='gagarina blvd'||data.name.trim().toLowerCase()=='gagarinablvd'||data.name.trim().toLowerCase()=='gagarina blvd.'|| data.name.trim().toLowerCase()=='gagarina boulevard')
    {
      this.ans1=true
      this.ans0=false;
      this.hint1=false;
    } 
    else{
      this.score = this.score - 2;
      if(this.score < 0)
      {
        this.ans0=false;
        this.over=true;
      }
      else
      {
        alert("Wrong Answer Buddy")
      }
      
    }
  }
  twoClickSubmit(data){
    if(data.name.trim().toLowerCase()=='gelnica')
    {
      this.ans1=false;
      this.ans2=true;
      this.hint2=false;
    } 
    else{
      this.score = this.score - 2;
      if(this.score < 0)
      {
        this.ans1=false;
        this.over=true;
      }
      else
      {
        alert("Wrong Answer Buddy")
      }
      
    }
  }
  threeClickSubmit(data){
    if(data.name.trim().toLowerCase()=='vatican')
    {
      this.ans2=false;
      this.ans3=true;
      this.hint3=false;
    } 
    else{
      this.score = this.score - 2;
      if(this.score < 0)
      {
        this.ans2=false;
        this.over=true;
      }
      else
      {
        alert("Wrong Answer Buddy")
      }
      
    }
  }
  fourClickSubmit(data){
    if(data.name.trim().toLowerCase()=='sistine chapel'||data.name.trim().toLowerCase()=='sistinechapel' )
    {
      this.ans3=false;
      this.ans4=true;
      this.hint4=false;
    } 
    else{
      this.score = this.score - 2;
      if(this.score < 0)
      {
        this.ans3=false;
        this.over=true;
      }
      else
      {
        alert("Wrong Answer Buddy")
      }
      
    }
  }
  fiveClickSubmit(data){
    if(data.name.trim().toLowerCase()=='167')
    {
      this.ans4=false;
      this.ans5=true;
      this.hint5=false;
    } 
    else{
      this.score = this.score - 2;
      if(this.score <= 0)
      {
        this.ans4=false;
        this.over=true;
      }
      else
      {
        alert("Wrong Answer Buddy")
      }
      
    }
  }
  h1ClickSubmit(){
    if(this.score>0)
    {
      if(this.hint1 == false)
      {
        this.score = this.score -1;
      }
      this.hint1 = true;
    }
  }
  h2ClickSubmit(){
    if(this.score>0)
    {
      if(this.hint2 == false)
      {
        this.score = this.score -1;
      }
      this.hint2 = true;
    }
    
  }
  h3ClickSubmit(){
    if(this.score>0)
    {
      if(this.hint3 == false)
      {
        this.score = this.score -1;
      }
      this.hint3 = true;
    }
    
  }
  h4ClickSubmit(){
    if(this.score>0)
    {
      if(this.hint4 == false)
      {
        this.score = this.score -1;
      }
      this.hint4 = true;
    }
    
  }
  h5ClickSubmit(){
    if(this.score>0)
    {
      if(this.hint5 == false)
      {
        this.score = this.score -1;
      }
      this.hint5 = true;
    }
    
  }
  

}
