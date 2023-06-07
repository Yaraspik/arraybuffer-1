import MathCalc from '../mathCalc';

export default class Magician extends MathCalc {
  constructor(name, type) {
    super(name, type);
    this.defence = 40;
    this.attack = 10;
  }
}
