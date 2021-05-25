import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './intro/intro.component';
import { StoryComponent } from './story/story.component';
import { FinalComponent } from './final/final.component';




@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    StoryComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
