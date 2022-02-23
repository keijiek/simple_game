import { AllData } from "../data/AllData.class";
import { LANGUAGES } from "../data/enums";
import { GameDateTime } from "../data/GameDateTime.class";
import { BoxBase } from "./BoxBase.class";

export class DateInfoBox extends BoxBase {
  private _date:GameDateTime;
  private _langID:LANGUAGES;

  constructor(allData:AllData, classValue:string, langID:LANGUAGES=LANGUAGES.JA) {
    super(classValue);
    this._langID = langID;
    this._date = allData.dateTime;
  }

  public update():void {
    this.div.textContent = this._date.fullInfo(this._langID);
  }

}
