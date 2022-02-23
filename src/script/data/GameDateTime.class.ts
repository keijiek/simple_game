import { LANGUAGES } from "./enums";

export class GameDateTime {
  private dateTime:Date;
  private _yearModify:number = 1999;
  private dayOfWeek:Array<Array<string>> = [['日','月','火','水','木','金','土'], ['Sun.','Mon.','Tue.','Thu.','Fri.','Sat.']];
  private ENG_MONTHES:Array<string> = ['Jan.(01)', 'Feb.(02)', 'Mar.(03)', 'Apr.(04)', 'May(05)', 'Jun.(06)', 'Jul.(07)', 'Aug.(08)', 'Sep.(09)', 'Act.(10)', 'Nov.(11)', 'Dec.(12)'];
  
  constructor(year:number=2000, month:number=1, date:number=0, hour:number=0, minute:number=0, second:number=0) {
    this.dateTime = new Date(year, month, date);
  }

  public passDay():void {
    this.dateTime.setDate(this.dateTime.getDay()+1);
  }

  public fullInfo(langID:LANGUAGES):string {
    switch (langID) {
      case LANGUAGES.JA:
        return this.year()+'年目 '+this.monthWithZero()+'月'+this.dayWithZero()+'日';
      case LANGUAGES.EN:
        return 'Year '+this.year()+' '+this.ENG_MONTHES[this.month()]+' '+this.dayWithZero();
    }
  }

  private year():number {
    return this.dateTime.getFullYear()-this._yearModify;
  }

  private month():number {
    return this.dateTime.getMonth();
  }
  private monthWithZero():string {
    return this.addZero(this.month()+1);
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
