import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  public counter = false;
  public name: String;
  public noname = false;
  public yesname = false;
  public clair = true;
  constructor() { }
  public score: number = 5;

  ngOnInit(): void {
    const target = document.querySelector('#app')
    const target1 = document.querySelector('#bot')
    const writer = new Typewriter(target, {
      loop: false,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'red'
    })
    
    writer
      .type('You can see ')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .type('nothing')
      .rest(500)
      .remove(7)
      .type('everything')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(10)
      .type('........')
      .rest(500)
      .start()
      const writer1 = new Typewriter(target1, {
        loop: false,
        typeColor: 'white'
      })
      
      writer1
      .strings(
        2000,
        "Hi",
        "My name is Clair", 
        "I work for a undisclosed client",
        "We have a job for you",
        "But first we will like you to enter your name below"
      )
      .start()
              
}
ClickSubmit(data) {
this.name = data.name;
this.counter = true;
this.yesname = true;
this.clair = false;

}
onClickSubmit() {
this.name = "Agent103"
this.counter = true;
this.noname = true;
this.clair = false;
this.score = this.score - 1;
}
  

}
