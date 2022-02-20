import { GameTime } from "./GameTime.class";
import { Hero } from "./Hero.class";

export class AllData {
  hero:Hero;
  time:GameTime;

  constructor() {
    this.hero = new Hero();
    this.time = new GameTime(700);
  }
}
