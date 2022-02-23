export class ButtonBase {
  protected _button:HTMLButtonElement = document.createElement('button');

  constructor(buttonText:string, classValues:Array<string>=[]) {
    classValues.push('button');
    this._button.setAttribute('class', classValues.join(' '));
    this._button.textContent = buttonText;
  }

  get button():HTMLButtonElement {
    return this._button;
  }
}