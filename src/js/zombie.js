import Character from './character';

export default class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
    this.attack = 40;
    this.defense = 10;
  }
}
