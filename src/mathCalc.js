import Character from './character';

export default class MathCalc extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
  }

  set stoned(stoned) {
    this.tempStoned = stoned;
  }

  get stoned() {
    if (this.tempStoned === true) {
      return Math.log2(this.distance) * 5;
    }
    return 0;
  }

  set attack(attack) {
    this.tempAttack = attack;
  }

  get attack() {
    return this.tempAttack * ((110 - (this.distance * 10)) / 100) - this.stoned;
  }
}
