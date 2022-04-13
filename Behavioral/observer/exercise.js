class Event {
  constructor() {
    this.events = new Map();
    this.counter = 0;
  }

  fire(source, args) {
    this.events.forEach((handler, key) => {
      handler(source, args);
    })
  }

  subscribe(handler) {
    this.events.set(this.counter++, handler);
    return this.counter;
  }

  unsubscribe(id) {
    this.events.delete(id);
  }
}

class Game {
  constructor() {
    this.broadcast = new Event();
  }
}

class Rat {
  constructor(game) {
    this.game = game;
    this.attack = 1;
    this.game.broadcast.fire(this, 1);
    this.id = this.game.broadcast.subscribe((source, args) => {
      if(source !== this) {
        this.attack += args;
      }
    });
  }

  die() {
    this.game.broadcast.fire(this, -1);
   this.game.broadcast.unsubscribe(this.id);
  }
}

let game = new Game();
let rat = new Rat(game);
let rat2 = new Rat(game);

console.log(rat.attack);
rat2.die();
console.log(rat.attack);