import { AllData } from "../data/AllData.class";
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

  constructor(allData:AllData) {
    super('comprehensive_container');
    this._dateInfoBox = new DateInfoBox(allData, 'date_info_box');
    this._heroInfoBox = new HeroInfoBox(allData, 'hero_info_box');
    this._imageBox    = new ImageBox   (allData, 'image_box');
    this._subInfoBox  = new SubInfoBox (allData, 'sub_info_box');
    this._messageBox  = new MessageBox (allData, 'message_box');
    this.fullAppend();
    this.update();
  }

  update():void {
    this._dateInfoBox.update();
    this._heroInfoBox.update();
    this._imageBox.update();
    this._subInfoBox.update();
    this._messageBox.update();
  }

  private fullAppend():HTMLDivElement {
    this.div.appendChild(this.upperContainer());
    this.div.appendChild(this.middleContainer());
    this.div.appendChild(this.lowerContainer());
    return this.div;
  }

  private upperContainer():HTMLDivElement {
    return this.container('upper_container', [this._dateInfoBox.div]);
  }

  private middleContainer():HTMLDivElement {
    return this.container('middle_container', [this._heroInfoBox.div, this._imageBox.div, this._subInfoBox.div]);
  }

  private lowerContainer():HTMLDivElement {
    return this.container('lower_container', [this._messageBox.div]);
  }

  private container(classValue:string, childlen:HTMLDivElement[]):HTMLDivElement {
    const container = this.subDiv(classValue);
    childlen.forEach( child =>{
      container.appendChild(child);
    });
    return container;
  }
}
