export class Defaults {
  on = true
  bri = 128
  transition = 7
  mainseg = 0
  seg: any

  constructor(json: any) {
    this.on = json.on
    this.bri = json.bri
    this.transition = json.transition
    this.mainseg = json.mainseg
    this.seg = json.seg
  }
}
