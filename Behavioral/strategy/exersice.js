class Creature {
  constructor(attack, health) {
    this.attack = attack;
    this.health = health;
    this.alive = this.health > 0;
    this.id = Math.random();
  }
}

class Game {
  constructor(damageStrategy) {
    this.damageStrategy = damageStrategy;
  }

  springTrapOn(creature) {
    this.damageStrategy.damage(creature);
    return creature.alive;
  }
}

class DamageStrategy {
  damage(creature) {
    if (creature.health <= 0) {
      creature.alive = false;
    }
  }
}

class ConstantDamageStrategy extends DamageStrategy {
  constructor() {
    super();
  }

  damage(creature) {
    creature.health--;
    super.damage(creature);
  }
}

class GrowingDamageStrategy extends DamageStrategy {
  constructor() {
    super();
  }
  damage(creature) {
    let impact = GrowingDamageStrategy.impact[creature.id]
    if(impact) {
      GrowingDamageStrategy.impact[creature.id] += 1;
    } else {
      GrowingDamageStrategy.impact[creature.id] = 1;
    }
    
    creature.health = creature.health - GrowingDamageStrategy.impact[creature.id];
    super.damage(creature);
  }
}
GrowingDamageStrategy.impact = {};

let cg = new Game(new ConstantDamageStrategy());
let c = new Creature(1, 3);

cg.springTrapOn(c);
cg.springTrapOn(c);
cg.springTrapOn(c);
cg.springTrapOn(c);
console.log(c.health)
console.log(c.alive)

// describe('strategy', function()
// {
//   it('creature with ordinary strategy', function()
//   {
//     let cg = new Game(new ConstantDamageStrategy());
//     let c = new Creature(1, 3);

//     expect(c.health).toEqual(3);
//     expect(c.alive).toEqual(true);
//     cg.springTrapOn(c);
//     expect(c.health).toEqual(2);
//     expect(c.alive).toEqual(true);
//     cg.springTrapOn(c);
//     expect(c.health).toEqual(1);
//     expect(c.alive).toEqual(true);
//     cg.springTrapOn(c);
//     expect(c.health).toEqual(0);
//     expect(c.alive).toEqual(false);
//   });

//   it('creature with growing strategy', function()
//   {
//     let cg = new Game(new GrowingDamageStrategy());
//     let c = new Creature(1, 3);

//     expect(c.health).toEqual(3);
//     expect(c.alive).toBe(true);

//     cg.springTrapOn(c);
//     expect(c.health).toEqual(2);
//     expect(c.alive).toBe(true);

//     cg.springTrapOn(c);
//     expect(c.health).toEqual(0);
//     expect(c.alive).toBe(false);
//   });

//   it('two creatures with their own deprecation', function() {
//     console.log('two creatures are used here...');
//     let cg = new Game(new GrowingDamageStrategy());
//     let c1 = new Creature(1, 3);
//     let c2 = new Creature(1, 3);

//     console.log('springing a trap on both creatures');
//     console.log('expecting each creature to be damaged by 1');
//     cg.springTrapOn(c1);
//     cg.springTrapOn(c2);

//     expect(c1.health).toEqual(2);
//     expect(c1.alive).toBe(true);
//     expect(c2.health).toEqual(2);
//     expect(c2.alive).toBe(true);

//     cg.springTrapOn(c2);
//     expect(c2.health).toEqual(0);
//     expect(c2.alive).toBe(false);
//   });
// });