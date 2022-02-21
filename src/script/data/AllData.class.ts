import { GameDateTime } from "./GameDateTime.class";
import { Hero } from "./Hero.class";
import { Messages } from "./Messages.class";

export class AllData {
  public dateTime: GameDateTime;
  public hero: Hero;
  public messages: Messages;

  constructor() {
    this.hero = new Hero();
    this.dateTime = new GameDateTime();
    this.messages = new Messages();
  }
}
