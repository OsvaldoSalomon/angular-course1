import { Band } from "../shared/band.model";

export class BandModel {
  public name: string;
  public description: string;
  public imagePath: string;
  public bands: Band[];

  constructor(name: string, desc: string, imagePath: string, bands: Band[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.bands = bands;
  }
}
