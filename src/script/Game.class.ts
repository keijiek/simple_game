import { AllData } from './data/AllData.class';
import { TownScene } from './scenes/TownScene';
import { OutputManager } from './htmlParts/OutputManager.class';

export class Game {
  private _allData:AllData;
  private _outputManager: OutputManager;

  constructor(parentalElement: HTMLElement) {
    this._allData = new AllData();
    this._outputManager = new OutputManager(this._allData);
    parentalElement.appendChild(this._outputManager.div);

    this.mainLoop();
    console.log('game終了');
  }

  private mainLoop():void {
    this._outputManager.update();
    
    
  }
}
