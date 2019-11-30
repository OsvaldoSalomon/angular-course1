import { EventEmitter, Injectable } from '@angular/core';

import { AlbumsModel } from "./albums.model";
import { Songs } from "../shared/songs.model";

@Injectable()
export class AlbumsService {
  albumSelected = new EventEmitter<AlbumsModel>();

  private albums: AlbumsModel[] = [
    new AlbumsModel('Death Stranding: Timefall', 'Single for Death Stranding', 'https://m.media-amazon.com/images/I/51XJpPmsqWL._SS500_.jpg',
      [ new Songs('Ludens', 4) ]),
    new AlbumsModel('amo', 'Latest album yet', 'https://fanart.tv/fanart/music/074e3847-f67f-49f9-81f1-8c8cea147e8e/albumcover/amo-5c4b135bf2250.jpg',
      [ new Songs('sugar, honey, ice and tea', 5.13) ]),
    new AlbumsModel('That/s the Spirit', 'Listen now', 'https://i.pinimg.com/originals/55/8f/e2/558fe20a719d037b66e83a3df2095a03.jpg',
      [ new Songs('Follow you', 4.34) ]),
    new AlbumsModel('Sempiternal', 'Listen now', 'https://i2.wp.com/www.musicomh.com/wp-content/uploads/2013/03/bring-me-the-horizon.jpg?fit=300%2C300&ssl=1',
      [ new Songs('Shadow Moses', 6.02) ])
  ];

  getAlbums() {
    return this.albums.slice();
  }

}
