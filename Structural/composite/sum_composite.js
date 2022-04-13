class SingleValue {
  constructor(value) {
    this._value= value;
  }

  [Symbol.iterator]() {
    let returned = false;
    return {
      next: () => ({
        value: this._value,
        done: returned++
      })
    }
  }
}

class ManyValues extends Array {}

let sum = function(containers) {
  let sum = 0;
  for(let container of containers) {
    for(value of container) {
      sum += value;
    }
  }

  return sum;
};

let singleValue = new SingleValue(11);
let otherValues = new ManyValues();
otherValues.push(22);
otherValues.push(33);
console.log(sum([singleValue, otherValues])); // 66;