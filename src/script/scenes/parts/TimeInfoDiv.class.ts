import { BoxBase } from "../../htmlParts/BoxBase.class";
import { GameDateTime } from "../../data/GameDateTime.class";

export class TimeInfoDiv extends BoxBase {
  private _dateTime:GameDateTime;

  constructor(dateTime:GameDateTime) {
    super('date_info');
    this._dateTime = dateTime;
    this.set();
  }

  public set():HTMLDivElement {
    this.div.textContent = this._dateTime.fullInfo();
    return this.div;
  }

}
