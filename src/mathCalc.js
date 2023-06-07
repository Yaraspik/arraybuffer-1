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
    return this.tempStoned;
  }

  set attack(attack) {
    this.tempAttack = attack;
  }

  get attack() {
    if (this.stoned) {
      const stoned = Math.log2(this.distance) * 5;
      return this.tempAttack * ((110 - (this.distance * 10)) / 100) - stoned;
    }
    return this.tempAttack * ((110 - (this.distance * 10)) / 100);
  }
}
