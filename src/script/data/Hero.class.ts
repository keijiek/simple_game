import { labelValueSet } from "../htmlParts/parts/labelValueSet.class";
import { interfaceLabelValue, pairStrNum, pairStrStr } from "./Interfaces";

export class Hero {
  private _name:   pairStrStr = {label:['名前', 'Name'], value:'あなた'};
  private _age:    pairStrNum = {label:['年齢', 'Age'], value:0};
  private _money:  pairStrNum = {label:['金', 'Gold'], value:0};
  private _combat: pairStrNum = {label:['戦闘', 'Combat'], value:0};

  constructor() {
    this.autoMakeSelf();
  }
  
  get namePair(): pairStrStr {
    return this._name;
  }
  get agePair(): pairStrNum {
    return this._age;
  }
  get moneyPair(): pairStrNum {
    return this._money;
  }
  get combatPair(): pairStrNum {
    return this._combat;
  }

  private autoMakeSelf():void {
    this._age.value = Math.floor(Math.random()*10) + 10;
    this._combat.value = 1;
    this._money.value = Math.floor(Math.random()*10) + 1;
  }
}
