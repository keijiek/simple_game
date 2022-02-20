export class TitleScene {

  constructor() {
    this.createTitleScreen();
  }

  private createTitleScreen():HTMLElement {
    const elm:HTMLElement = document.createElement('div');
    elm.appendChild(this.createH1());
    return elm;
  }

  private createH1():HTMLHeadingElement {
    const h1 = document.createElement('h1');
    h1.textContent = 'タイトルどーん';
    return h1;
  }
}
