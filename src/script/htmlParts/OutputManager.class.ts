import { AllData } from "../data/AllData.class";
import { LANGUAGES } from "../data/enums";
import { BoxBase } from "./BoxBase.class";
import { DateInfoBox } from "./DateInfoBox.class";
import { HeroInfoBox } from "./HeroInfoBox.class";
import { ImageBox } from "./ImageBox.class";
import { MessageBox } from "./MessageBox.class";
import { SubInfoBox } from "./SubInfoBox.class";

export class OutputManager extends BoxBase {
  private _heroInfoBox: HeroInfoBox;
  private _dateInfoBox: DateInfoBox;
  private _messageBox: MessageBox;
  private _imageBox: ImageBox;
  private _subInfoBox: SubInfoBox;
  private _langID:LANGUAGES;

  constructor(allData:AllData, langID:LANGUAGES=LANGUAGES.JA) {
    super('comprehensive_container');
    this._langID = langID;
    this._dateInfoBox = new DateInfoBox(allData, 'date_info_box', this._langID);
    this._heroInfoBox = new HeroInfoBox(allData, 'hero_info_box', this._langID);
    this._imageBox    = new ImageBox   (allData, 'image_box', this._langID);
    this._subInfoBox  = new SubInfoBox (allData, 'sub_info_box', this._langID);
    this._messageBox  = new MessageBox (allData, 'message_box', this._langID);
    this.div.appendChild(this.makeContainer('upper_container',  [this._dateInfoBox.div]));
    this.div.appendChild(this.makeContainer('middle_container', [this._heroInfoBox.div, this._imageBox.div, this._subInfoBox.div]));
    this.div.appendChild(this.makeContainer('lower_container',  [this._messageBox.div]));
  }

  update():void {
    this._dateInfoBox.update();
    this._heroInfoBox.update();
    this._imageBox.update();
    this._subInfoBox.update();
    this._messageBox.update();
  }

  private makeContainer(classValue:string, childlen:HTMLDivElement[]):HTMLDivElement {
    const container = this.subDiv(classValue);
    childlen.forEach( child =>{
      container.appendChild(child);
    });
    return container;
  }
}
