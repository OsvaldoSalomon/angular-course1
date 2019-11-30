import { Component, OnInit } from '@angular/core';
import {AlbumsModel} from "../albums.model";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  albums: AlbumsModel[];

  constructor(private albumService: AlbumsService) { }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

}
