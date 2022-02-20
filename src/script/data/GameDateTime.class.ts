export class GameDateTime {
  private dateTime:Date;

  constructor(year:number=700, month:number=0, day:number=1, hour:number=0, minute:number=0, second:number=0) {
    this.dateTime = new Date(year, month, day, hour, minute, second);
  }

  public passDay():void {
    this.dateTime.setDate(this.dateTime.getDay()+1);
  }

  public fullInfo():string {
    return this.dateTime.getFullYear()+'年 '+this.dateTime.getMonth()+1+'月 '+this.dateTime.getDay()+'日';
  }
}
