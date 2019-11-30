import { Component, OnInit } from '@angular/core';

import { AlbumsModel } from "./albums.model";
import { AlbumsService } from "./albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [ AlbumsService ]
})
export class AlbumsComponent implements OnInit {
  selectedAlbum: AlbumsModel;

  constructor(private albumService: AlbumsService) { }

  ngOnInit() {
    this.albumService.albumSelected
      .subscribe(
        (album: AlbumsModel) => {
          this.selectedAlbum = album;
        }
      );
  }

}
