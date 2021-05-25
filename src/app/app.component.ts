import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';
  public start = false;
  public open = true;
  ngOnInit() {

}
InClickSubmit(){
  this.start= true;
  this.open= false;
}

}
