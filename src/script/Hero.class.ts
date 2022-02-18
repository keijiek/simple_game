export class Hero {
  private _name: string = 'あなた';
  private _age: number = 0;
  private _combat: number = 0;
  private _money: number = 0;

  constructor() {
    this.autoMakeSelf();
  }

  private autoMakeSelf():void {
    this._age = Math.floor(Math.random()*10) + 10;
    this._combat = 1;
    this._money = Math.floor(Math.random()*10) + 1;
  }
}
