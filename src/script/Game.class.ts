import { Outputter } from './Outputter.class';
import { Hero } from './Hero.class';

export class Game {
  private _mainFrame: HTMLElement = document.createElement('div');
  private _outputter: Outputter = new Outputter();
  private _hero: Hero = new Hero();

  constructor(appendedElement: HTMLElement) {
    appendedElement.appendChild(this._outputter.mainFrame);
  }
}
