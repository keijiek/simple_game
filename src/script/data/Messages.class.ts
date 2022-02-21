export class Messages {
  private _messages:string[] = [];

  constructor() {
    this.push('initial message.');
  }

  public push(newMessage:string):Messages {
    this.messages.push(newMessage);
    return this;
  }

  public finalMessages():string {
    return this.messages.slice(-1)[0];
  }

  get messages():string[] {
    return this._messages;
  }
}
