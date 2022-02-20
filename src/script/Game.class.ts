import { AllData } from './data/AllData.class';
import { TownScene } from './scenes/TownScene';

export class Game {
  private _gameFrame: HTMLDivElement;
  private _allData:AllData;

  constructor(appendedElement: HTMLElement) {
    this._gameFrame = this.createGameFrame();
    this._allData = new AllData();

    appendedElement.appendChild(this._gameFrame);
    this.startGame();
  }

  private createGameFrame():HTMLDivElement {
    const gameFrame = document.createElement('div');
    gameFrame.setAttribute('class', 'game_frame');
    return gameFrame;
  }

  private startGame():void {
    this._gameFrame.appendChild((new TownScene(this._allData)).frame);
  }
}
