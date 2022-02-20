import { BoxBase } from './BoxBase.class';
import { Hero } from '../data/Hero.class';

export class HeroInfoBox extends BoxBase {
  private _nameDiv:HTMLDivElement;
  private _hero:Hero;

  constructor(hero:Hero) {
    super('right_box');
    this._hero = hero;
    this._nameDiv = this.subDiv();
  }



}
