import { AllData } from "../data/AllData.class";
import { Messages } from "../data/Messages.class";
import { BoxBase } from "./BoxBase.class";

export class MessageBox extends BoxBase {
  private _messages:Messages;

  constructor(allData:AllData, classValue:string) {
    super(classValue);
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
