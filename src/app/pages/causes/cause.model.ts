export class Cause {
  public name: string;
  public type: string;
  public description: string;
  public fundsNeeded: string;
  public fundsGathered: string;


  constructor(name: string, description: string, fundsNeeded: string, fundsGathered: string, type: string) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.fundsNeeded = fundsNeeded;
    this.fundsGathered = fundsGathered;
  }
}
