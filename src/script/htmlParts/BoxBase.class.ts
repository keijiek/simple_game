export class BoxBase {
  private _div:HTMLDivElement;

  constructor(classValue:string) {
    this._div = this.subDiv(classValue);
  }

  get div():HTMLDivElement {
    return this._div;
  }

  protected subDiv(classValue:string=''):HTMLDivElement {
    const div = document.createElement('div');
    if(classValue.length>0) {
      div.setAttribute('class', classValue);
    }
    return div;
  }
}
