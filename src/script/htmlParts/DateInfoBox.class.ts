import { GameDateTime } from "../data/GameDateTime.class";

export class DateInfoBox {
  private _div: HTMLDivElement;

  constructor(date:GameDateTime) {
    this._div = document.createElement('div');
    this._div.setAttribute('class', 'datetime_box')
  }

  get div():HTMLDivElement {
    return this._div;
  }
}
