import {Songs} from "../shared/songs.model";

export class AlbumsModel {
  public name: string;
  public description: string;
  public imagePath: string;
  public songs: Songs[];

  constructor(name: string, desc: string, imagePath: string, songs: Songs[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.songs = songs;
  }
}
