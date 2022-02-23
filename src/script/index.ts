import '../sass/style.scss';// sass もビルド対象にするため
import{ Game } from './Game.class';

window.onload = () => {
  new Game(document.body);
}
