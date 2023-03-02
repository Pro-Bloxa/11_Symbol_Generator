import Daemon from './Daemon';
import Undead from './Undead';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Выбранный персонаж уже добавлен.');
    } else {
      this.members.add(character);
    }
  }

  addAll(...character) {
    character.forEach((el) => this.members.add(el));
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    yield* this.toArray();
  }
}

const team = new Team();
team.add(new Undead('Undead'));
team.add(new Daemon('Daemon'));
console.log(team);
for (const member of team) {
  console.log(member);
}
