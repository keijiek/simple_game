import { AllData } from "../data/AllData.class";
import { GameDateTime } from "../data/GameDateTime.class";
import { BoxBase } from "./BoxBase.class";

export class SubInfoBox extends BoxBase {
  private _date:GameDateTime;

  constructor(allData:AllData, classValue:string) {
    super(classValue);
    this._date = allData.dateTime;
  }

  update():void {

  }
}