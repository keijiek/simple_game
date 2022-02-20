import { AllData } from "../data/AllData.class";
import { GameTime } from "../data/GameTime.class";
import { Hero } from "../data/Hero.class";

export class TownScene {
  private _frame: HTMLDivElement = document.createElement('div');
  private _dateDiv: HTMLDivElement = document.createElement('div');
  private _hero:Hero;
  private _time:GameTime;

  constructor(allData:AllData) {
    this._hero = allData.hero;
    this._time = allData.time;
    this.createScreen();
  }

  get frame():HTMLDivElement {
    return this._frame;
  }

  private createScreen():void {
    this._dateDiv.setAttribute('class', 'date_time');
    this._frame.appendChild(this._dateDiv);
  }

  private opDateTime():void {
    const newDateTime = (new Date()).toString();
    this._dateDiv.textContent = newDateTime;
  }
}
