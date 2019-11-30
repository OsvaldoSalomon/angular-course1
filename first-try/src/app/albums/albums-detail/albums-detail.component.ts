import {Component, Input, OnInit} from '@angular/core';
import {AlbumsModel} from "../albums.model";

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumsDetailComponent implements OnInit {
  @Input() album: AlbumsModel
  constructor() { }

  ngOnInit() {
  }

}
