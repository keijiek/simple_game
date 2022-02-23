import { BoxBase } from './BoxBase.class';
import { AllData } from '../data/AllData.class';
import { Hero } from '../data/Hero.class';
import { labelValueSet } from './parts/labelValueSet.class';
import { LANGUAGES } from '../data/enums';

export class HeroInfoBox extends BoxBase {
  private _hero:Hero;
  private _dataPairArray: Array<labelValueSet> = [];
  private _langID:LANGUAGES;

  constructor(allData:AllData, classValue:string, langID:LANGUAGES=LANGUAGES.JA) {
    super(classValue);
    this._langID = langID;
    this._hero = allData.hero;
    this._dataPairArray = [
      new labelValueSet(this._hero.namePair, this._langID),
      new labelValueSet(this._hero.agePair, this._langID),
      new labelValueSet(this._hero.moneyPair, this._langID),
      new labelValueSet(this._hero.combatPair, this._langID)
    ];
    this.appendAll();
  }

  private appendAll():void {
    this._dataPairArray.forEach(e => {
      this.div.appendChild(e.div);
    });
  }

  update():void {
    this._dataPairArray.forEach(e => {
      e.update();
    });
  }

  private updateCel(targetDiv:HTMLDivElement, textContent:string):HeroInfoBox {
    targetDiv.textContent = textContent;
    return this;
  }

}
