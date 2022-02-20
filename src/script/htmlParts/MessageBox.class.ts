import { Messages } from "../data/Messages.class";
import { BoxBase } from "./BoxBase.class";

export class MessageBox extends BoxBase{
  private _messages:Messages;

  constructor(messages:Messages) {
    super('message_box');
    this._messages = messages;
  }

  public setMessage(message:string):HTMLDivElement {
    this.div.textContent = message;
    return this.div;
  }

}
