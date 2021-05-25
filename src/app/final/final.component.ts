import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';
import { IntroComponent } from '../intro/intro.component';
import { StoryComponent } from '../story/story.component';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  public final = true;
  public ansfin = false;
  public congo = false;
  public score: number;
  public over1 = false;
  public hint1 = false;

  constructor(private intro: IntroComponent, private story:StoryComponent) { }

  ngOnInit(): void {
    this.score = this.story.score;
    const target = document.querySelector('#final')
    const writer1 = new Typewriter(target, {
      loop: false,
      typeColor: 'white'
    })
    
    writer1
    .strings(
      2000,
      "Goob Job",
      "This is the last Clue "+this.intro.name, 
      "If you crack this. We'll get that rat",
      "Focus",
      "Click next"
    )
    .start()
  }
  sixClickSubmit(){
    this.final=false;
    this.ansfin = true;
  }
  sevenClickSubmit(data){
    if(data.name.trim().toLowerCase()=='vatican apostolic archive'||data.name.trim().toLowerCase()=='vaticanapostolicarchive')
    {
      this.ansfin= false;
      this.congo = true;
    }
    else{
      this.score = this.score - 2;
      if(this.score <= 0)
      {
        this.ansfin=false;
        this.over1=true;
      }
      else
      {
        alert("Wrong Answer Buddy")
      }
      
    }
  }
  h1ClickSubmit(){
    this.hint1=true;
    this.score=this.score-1;
  }

}
