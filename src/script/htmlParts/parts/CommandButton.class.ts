import { ButtonBase } from "./ButtonBase.class";

export class CommandButton extends ButtonBase{

  constructor(buttonText:string, classValues:Array<string>=[]) {
    super(buttonText, classValues);
  }
}
