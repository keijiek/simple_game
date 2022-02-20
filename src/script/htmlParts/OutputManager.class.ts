import { AllData } from "../data/AllData.class";
import { DateInfoBox } from "./DateInfoBox.class";
import { HeroInfoBox } from "./HeroInfoBox.class";
import { MessageBox } from "./MessageBox.class";

export class OutputManager {
  private _upperContainer : HTMLDivElement = document.createElement('div');
  private _middleContainer: HTMLDivElement = document.createElement('div');
  private _lowerContainer : HTMLDivElement = document.createElement('div');
  private _heroInfoBox: HeroInfoBox;
  private _dateInfoBox: DateInfoBox;
  private _messageBox: MessageBox;

  constructor(allData:AllData) {
    this._upperContainer.setAttribute('class', 'upper_container');
    this._middleContainer.setAttribute('class', 'middle_container');
    this._lowerContainer.setAttribute('class', 'lower_container');
    this._heroInfoBox = new HeroInfoBox(allData.hero);
    this._dateInfoBox = new DateInfoBox(allData.dateTime);
    this._messageBox = new MessageBox(allData.messages);

    
  }
}
