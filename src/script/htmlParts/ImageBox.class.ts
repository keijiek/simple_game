import { BoxBase } from "./BoxBase.class";
import { AllData } from "../data/AllData.class";
import { LANGUAGES } from "../data/enums";

export class ImageBox extends BoxBase {
  private _langID:LANGUAGES;

  constructor(allData:AllData, classValue:string, langID:LANGUAGES=LANGUAGES.JA) {
    super(classValue);
    this._langID = langID;
  }

  update():void {
    
  }
}
