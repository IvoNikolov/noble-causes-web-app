export class Cause {
  public name: string;
  public description: string;
  public fundsNeeded: string;
  public fundsGathered: string;


  constructor(name: string, description: string, fundsNeeded: string, fundsGathered: string) {
    this.name = name;
    this.description = description;
    this.fundsNeeded = fundsNeeded;
    this.fundsGathered = fundsGathered;
  }
}
