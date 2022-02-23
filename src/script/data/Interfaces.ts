export interface interfaceLabelValue {
  label:Array<string>,
  value: number | string,
}
export interface pairStrNum extends interfaceLabelValue {
  label:Array<string>,
  value:number
}
export interface pairStrStr extends interfaceLabelValue {
  label:Array<string>,
  value:string
}
