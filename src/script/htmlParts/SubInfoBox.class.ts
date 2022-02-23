import { AllData } from "../data/AllData.class";
import { LANGUAGES } from "../data/enums";
import { GameDateTime } from "../data/GameDateTime.class";
import { BoxBase } from "./BoxBase.class";
import { CommandButton } from "./parts/CommandButton.class";

export class SubInfoBox extends BoxBase {
  private _date:GameDateTime;
  private _langID:LANGUAGES;
  // private _sceneTown:SceneTown;

  constructor(allData:AllData, classValue:string, langID:LANGUAGES=LANGUAGES.JA) {
    super(classValue);
    this._langID = langID;
    this._date = allData.dateTime;
    this.viewTownCommand();
  }

  update():void {

  }

  private viewTownCommand():void {
    const div = document.createElement('div');
    const restButton:CommandButton = new CommandButton('休息');
    
    div.appendChild(restButton.button);
    this.div.appendChild(div);
  }

  
}