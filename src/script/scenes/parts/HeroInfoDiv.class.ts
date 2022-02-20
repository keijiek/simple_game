import { Hero } from '../../data/Hero.class';

export class HeroInfoDiv {
  private _hero:Hero;
  private _div:HTMLDivElement;

  constructor(hero:Hero) {
    this._hero = hero;
    this._div = document.createElement('div');
    this._div.setAttribute('class', 'hero_info');
  }
}
