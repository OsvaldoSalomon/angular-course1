import { Component, OnInit } from '@angular/core';
import {AlbumsModel} from "../albums.model";

@Component({
  selector: 'app-albums-item',
  templateUrl: './albums-item.component.html',
  styleUrls: ['./albums-item.component.css']
})
export class AlbumsItemComponent implements OnInit {

  albums: AlbumsModel[] = [
    new AlbumsModel('Death Stranding Timefall', 'Single for Death Stranding', 'https://m.media-amazon.com/images/I/51XJpPmsqWL._SS500_.jpg'),
    new AlbumsModel('amo', 'Latest album yet', 'https://fanart.tv/fanart/music/074e3847-f67f-49f9-81f1-8c8cea147e8e/albumcover/amo-5c4b135bf2250.jpg'),
    new AlbumsModel('That/s the Spirit', 'Listen now', 'https://i.pinimg.com/originals/55/8f/e2/558fe20a719d037b66e83a3df2095a03.jpg'),
    new AlbumsModel('Sempiternal', 'Listen now', 'https://i2.wp.com/www.musicomh.com/wp-content/uploads/2013/03/bring-me-the-horizon.jpg?fit=300%2C300&ssl=1')
  ];

  constructor() { }

  ngOnInit() {
  }

}
