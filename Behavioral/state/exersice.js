const state = {
  open: 'OPEN',
  locked: 'LOCKED',
  error: 'ERROR',
}

class CombinationLock {
  constructor(combination) {
    this.combination = combination;
    this.status = state.locked;
    this.length = this.combination.length;
    this.reset();
  }

  reset() {
    // reset lock state here
    this.status = state.locked;
    this.status = '';
  }

  enterDigit(digit) {
    this.status += String(digit);
    this.checkStatus();
  }

  checkStatus() {
    if(this.status.length === this.length)
      this.status = this.combination.join('') === this.status ? state.open : state.error;
  }
}

let cl = new CombinationLock([1, 2, 3, 4, 5]);
cl.enterDigit(1);
cl.enterDigit(2);
cl.enterDigit(3);
cl.enterDigit(4);
cl.enterDigit(5);
console.log(cl.status);

// describe('state', function() {
//   it('test success', function() {
//     let cl = new CombinationLock([1, 2, 3, 4, 5]);
//     expect(cl.status).toEqual('LOCKED');
//     cl.enterDigit(1);
//     expect(cl.status).toEqual('1');
//     cl.enterDigit(2);
//     expect(cl.status).toEqual('12');
//     cl.enterDigit(3);
//     expect(cl.status).toEqual('123');
//     cl.enterDigit(4);
//     expect(cl.status).toEqual('1234');
//     cl.enterDigit(5);
//     expect(cl.status).toEqual('OPEN');
//   });

//   it('test failure', function() {
//     let cl = new CombinationLock([1, 2, 3]);
//     expect(cl.status).toEqual('LOCKED');
//     cl.enterDigit(1);
//     expect(cl.status).toEqual('1');
//     cl.enterDigit(2);
//     expect(cl.status).toEqual('12');
//     cl.enterDigit(5);
//     expect(cl.status).toEqual('ERROR');
//   });
// });