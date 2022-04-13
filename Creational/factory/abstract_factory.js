var readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// const async = require('async');

class HotDrink {
  consume() { /** abstract */}
}

class Tea extends HotDrink{
  consume() {
    console.log(`The tea is deliscios, and it's better with a lemon`);
  }
}

class Coffee extends HotDrink {
  consume() {
    console.log(`The coffee is great, just feel the taste`);
  }
}

class HotDrinkFactory {
  prepare(amount){ /** abstract */}
}

class TeaFactory {
  prepare(amount) {
    console.log(`A cup of tea has ${amount}ml`);
    return new Tea();
  }
}

class CoffeeFactory {
  prepare(amount) {
    console.log(`Coffe is served with special cup and you have ${amount}ml of coffe`);
    return new Coffee();
  }
}


let AvailableDrink = Object.freeze({
  coffee: CoffeeFactory,
  tea: TeaFactory
});

class HotDrinkMachine {
  constructor() {
    this.factories = {};
    for(let drink in AvailableDrink) {
      this.factories[drink] = new AvailableDrink[drink]();
    }
  }

  interact(consumer) {
    rl.question('Please specify drink and amount ' +
      '(e.g., tea 50): ', answer => {
      let parts = answer.split(' ');
      let name = parts[0];
      let amount = parseInt(parts[1]);
      let d = this.factories[name].prepare(amount);
      rl.close();
      consumer(d);
    });
  }
}

let machine = new HotDrinkMachine();
machine.interact(
  function (drink) {
    drink.consume();
  }
);

