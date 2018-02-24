import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  segmentHeight = 200;
  style = {};

  scrollHandler(event) {
    console.log(event.target.scrollTop);

    const segmentStart = 0;
    const segmentEnd = segmentStart + this.segmentHeight;

    const scrollTop = event.target.scrollTop;

    let style = {};
    if (scrollTop < 1500) {
    } else if (scrollTop < 1700) {
      style = {
        transform: `translateY(${(scrollTop - 1500) / 2}px)translateY(-50%)`
      }
    } else if (scrollTop < 2000) {
      style = {
        transform: 'translateY(100px)translateY(-50%)'
      }
    } else if (scrollTop < 2200) {
      style = {
        transform: `translateY(${(scrollTop - 2000 + 200) / 2}px)translateY(-50%)`
      }
    } else {
      style = {
      }
    }
    Object.assign(this.style, style);
  }
}
