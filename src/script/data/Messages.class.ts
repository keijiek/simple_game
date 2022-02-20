export class Messages {
  private _messages:string[] = [];

  constructor() {
  }

  public push(newMessage:string) {
    this.messages.push(newMessage);
  }
  public finalMessage():string {
    return this.messages.slice(-1)[0];
  }
  get messages():string[] {
    return this._messages;
  }
}
