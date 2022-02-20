import { GameDateTime } from "./GameDateTime.class";
import { Hero } from "./Hero.class";
import { Messages } from "./Messages.class";

export class AllData {
  hero: Hero;
  dateTime: GameDateTime;
  messages: Messages;

  constructor() {
    this.hero = new Hero();
    this.dateTime = new GameDateTime();
    this.messages = new Messages();
  }
}
