class Person
{
  constructor(id, name)
  {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory
{
  constructor() {
    this.count = 0;
  }
  createPerson(name)
  {
    return new Person(this.count++, name);
  }
}

const factory = new PersonFactory();
console.log(factory.createPerson('Vova'));
console.log(factory.createPerson('Tanya'));