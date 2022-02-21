import { BoxBase } from './BoxBase.class';
import { AllData } from '../data/AllData.class';
import { Hero } from '../data/Hero.class';

export class HeroInfoBox extends BoxBase {
  private _hero:Hero;
  private _heroName:HTMLDivElement   = this.subDiv('hero_data hero_name');
  private _heroAge:HTMLDivElement    = this.subDiv('hero_data hero_age');
  private _heroMoney:HTMLDivElement  = this.subDiv('hero_data hero_money');
  private _heroCombat:HTMLDivElement = this.subDiv('hero_data hero_combat');

  constructor(allData:AllData, classValue:string) {
    super(classValue);
    this._hero = allData.hero;
    this.div.appendChild(this._heroName);
    this.div.appendChild(this._heroAge);
    this.div.appendChild(this._heroMoney);
    this.div.appendChild(this._heroCombat);
  }

  update():void {
    this.updateCel(this._heroName, this._hero.name)
      .updateCel(this._heroAge, this._hero.age+' 歳')
      .updateCel(this._heroMoney, this._hero.money+' 金')
      .updateCel(this._heroCombat, this._hero.combat+' 戦闘');
  }

  private updateCel(targetDiv:HTMLDivElement, textContent:string):HeroInfoBox {
    targetDiv.textContent = textContent;
    return this;
  }

}
