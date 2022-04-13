class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(idx) {
    this.handlers.delete(idx);
  }

  fire(sender, args) {
    this.handlers.forEach(function (v, k) {
      v(sender, args);
    });
  }
}

class Mediator {
  constructor() {
    this.events = new Event();
  }

  broadcast(sender, n) {
    this.events.fire(sender, n);
  }
}

class Participant {
  constructor(mediator) {
    this.mediator = mediator;
    this.value = 0;

    mediator.events.subscribe(
      this.alert.bind(this)
    );
  }

  alert(sender, n) {
    if(this !== sender) {
      this.value += n
    }
  }

  say(n) {
    this.mediator.events.fire(this, n);
  }
}

const mediator = new Mediator();
const person1 = new Participant(mediator);
const person2 = new Participant(mediator);

person1.say(2);
console.log(person1.value);
console.log(person2.value);