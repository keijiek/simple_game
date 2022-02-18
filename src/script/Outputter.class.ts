import './Hero.class';

export class Outputter {

  // private mainFrame: HTMLDivElement = document.createElement('div');
  private _mainFrame: HTMLElement = document.createElement('div');
  private timeFrame: HTMLDivElement = document.createElement('div');
  private dataFrame: HTMLDivElement = document.createElement('div');

  constructor() {
    this.timeFrame.textContent=(new Date()).toString();
    this.dataFrame.textContent='データ';
    this._mainFrame.appendChild(this.timeFrame);
    this._mainFrame.appendChild(this.dataFrame);
  }

  get mainFrame(): HTMLElement {
    return this._mainFrame;
  }

  public timeOutput(dateTime: Date):void {
    const month = dateTime.getMonth();
    const day = dateTime.getDay();
    this.timeFrame.textContent = month + '月' + ' ' + day + '日';
  }

  public dataOutput():void {
    
  }

  public fullOutput():void {

  }
}
