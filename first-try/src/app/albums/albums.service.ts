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
      [ new Songs('sugar, honey, ice and tea', 5.13), new Songs('in the dark', 3), new Songs('MANTRA', 3), new Songs('i apologize if you feel something', 3),new Songs('wonderful life', 3), new Songs('nihilst blues', 3), new Songs('mother tongue', 3), new Songs('heavy metal', 3), new Songs('ouch', 3),new Songs("why you gotta kick me when i'm down", 3), new Songs("i don't know what to say?", 3) ]),
    new AlbumsModel("That's the Spirit", 'Listen now', 'https://i.pinimg.com/originals/55/8f/e2/558fe20a719d037b66e83a3df2095a03.jpg',
      [ new Songs('Follow you', 4.34), new Songs('Happy Song', 3), new Songs('Blasphemy', 3), new Songs('Throne', 3), new Songs('Oh no', 3), new Songs('Drown', 3), new Songs('Avalanche', 3), new Songs('True Friends', 3) , new Songs('Run', 3) ]),
    new AlbumsModel('Sempiternal', 'Listen now', 'https://i2.wp.com/www.musicomh.com/wp-content/uploads/2013/03/bring-me-the-horizon.jpg?fit=300%2C300&ssl=1',
      [ new Songs('Shadow Moses', 6.02), new Songs('Can you feel my heart?', 3), new Songs('Empire (Let them sing)', 3), new Songs('Crooked Young', 3), new Songs('And the snakes start to sing', 3), new Songs('Sleepwalking', 3), new Songs('Seen it all before', 3), new Songs('Antivist', 3), new Songs("Go to hell for heaven's sake", 3) ])
  ];

  getAlbums() {
    return this.albums.slice();
  }

}
