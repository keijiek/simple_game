import { AllData } from "../data/AllData.class";
import { LANGUAGES } from "../data/enums";
import { Messages } from "../data/Messages.class";
import { BoxBase } from "./BoxBase.class";

export class MessageBox extends BoxBase {
  private _messages:Messages;
  private _langID:LANGUAGES;

  constructor(allData:AllData, classValue:string, langID:LANGUAGES=LANGUAGES.JA) {
    super(classValue);
    this._langID = langID;
    this._messages = allData.messages;
  }

  public setMessage(message:string):HTMLDivElement {
    this.div.textContent = message;
    return this.div;
  }

  public update():void {
    this.div.textContent = this._messages.finalMessages();
  }
}
