import { AllData }      from "../data/AllData.class";
import { GameDateTime } from "../data/GameDateTime.class";
import { Hero }         from "../data/Hero.class";


export class TownScene {
  private _frame: HTMLDivElement = document.createElement('div');

  private _hero:Hero;
  private _time:GameDateTime;

  constructor(allData:AllData) {
    this._hero = allData.hero;
    this._time = allData.dateTime;

    this.createScreen();
  }

  get frame():HTMLDivElement {
    return this._frame;
  }

  private createScreen():void {

  }

  private opDateTime():void {

  }
}
