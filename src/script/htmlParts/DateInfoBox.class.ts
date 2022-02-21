import { AllData } from "../data/AllData.class";
import { GameDateTime } from "../data/GameDateTime.class";
import { BoxBase } from "./BoxBase.class";

export class DateInfoBox extends BoxBase {
  private _date:GameDateTime;

  constructor(allData:AllData, classValue:string) {
    super(classValue);
    this._date = allData.dateTime;
  }

  public update():void {
    this.div.textContent = this._date.fullInfo();
  }

}
