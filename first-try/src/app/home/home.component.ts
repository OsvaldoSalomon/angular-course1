import { Component, OnInit } from "@angular/core";
import { BandModel } from "./home.model";

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  // albums: BandModel[] = [
  //   new BandModel('amo', 'Latest album', 'https://images.genius.com/a8ec36c3c37346c199f3895e6c7cd520.600x600x1.jpg')
  // ];

  constructor() { }

  ngOnInit() {
  }

}

