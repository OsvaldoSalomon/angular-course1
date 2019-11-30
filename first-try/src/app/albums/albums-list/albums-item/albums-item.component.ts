import {Component, Input, OnInit} from '@angular/core';

import {AlbumsModel} from "../../albums.model";
import {AlbumsService} from "../../albums.service";

@Component({
  selector: 'app-albums-item',
  templateUrl: './albums-item.component.html',
  styleUrls: ['./albums-item.component.css']
})
export class AlbumsItemComponent implements OnInit {
  @Input() album: AlbumsModel;

  constructor(private albumService: AlbumsService) { }

  ngOnInit() {
  }

  onSelected(){
    this.albumService.albumSelected.emit(this.album)
  }

}
