import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var $: any;
declare function HOME_INIT([]): any;
declare function INIT_SWIPER([]): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MexTvLemux';

  constructor() {
    
  }

  ngOnInit(): void {
    //setTimeout(() => {
      //HOME_INIT($);
      //INIT_SWIPER($);
    //}, 50);
  }
}
