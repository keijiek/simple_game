export class GameDateTime {
  private dateTime:Date;
  private _yearModify:number = 1969;
  private dayOfWeek:Array<string> = ['日','月','火','水','木','金','土'];

  constructor(year:number=1970, month:number=10, date:number=0, hour:number=0, minute:number=0, second:number=0) {
    this.dateTime = new Date(year, month, date);
  }

  public passDay():void {
    this.dateTime.setDate(this.dateTime.getDay()+1);
  }

  public fullInfo():string {
    return this.year()+'年目 '+this.monthWithZero()+'月'+this.dayWithZero()+'日';
  }

  private year():number {
    return this.dateTime.getFullYear()-this._yearModify;
  }

  private month():number {
    return this.dateTime.getMonth()+1;
  }
  private monthWithZero():string {
    return this.addZero(this.month());
  }

  private day():number {
    return this.dateTime.getDay();
  }
  private dayWithZero():string {
    return this.addZero(this.day());
  }

  private addZero(num:number):string {
    const dayOrMonth = String(num);
    if(dayOrMonth.length===1) {
      return '0'+dayOrMonth;
    } else {
      return dayOrMonth;
    }
  }
}
