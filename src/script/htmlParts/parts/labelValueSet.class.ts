import { BoxBase } from "../BoxBase.class";
import { interfaceLabelValue } from "../../data/Interfaces";
import { LANGUAGES } from "../../data/enums";

export class labelValueSet extends BoxBase{
  private langageID: LANGUAGES;
  private labelTag: HTMLDivElement;
  private valueTag: HTMLDivElement;
  private pair: interfaceLabelValue;

  constructor(pairLabelValue:interfaceLabelValue, langID:LANGUAGES=LANGUAGES.JA) {
    super('label_and_value');
    this.langageID = langID;
    this.labelTag = this.subDiv('label_of_lav');
    this.valueTag = this.subDiv('value_of_lav');
    this.div.appendChild(this.labelTag);
    this.div.appendChild(this.valueTag);
    this.pair = pairLabelValue;
  }

  // @override
  update():void {
    this.labelTag.textContent = this.pair.label[this.langageID];
    this.valueTag.textContent = String(this.pair.value);
  }
}
