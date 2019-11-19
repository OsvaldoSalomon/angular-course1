import { Songs } from "../shared/songs.model";

export class HomeModel {
  public name: string;
  public description: string;
  public imagePath: string;
  public songs: Songs[];

  constructor(name: string, desc: string, imagePath: string, bands: Songs[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.songs = this.songs;
  }
}
