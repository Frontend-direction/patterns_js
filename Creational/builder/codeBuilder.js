class Field {
  constructor(name){
    this.name = name;
  }
}

class Class {
  constructor(className) {
    this.className = className;
    this.fields = [];
  } 

  toString() {
    const constructorArg = this.fields.join(',');
    const constructorBody = this.fields.map((field,i,arr) => {
      return i === arr.length -1 ? `this.${field.name}=${field.name}` : `this.${field.name}=${field.name}\n          `;
    })
    return(`
      class ${this.className} {
        constructor(${constructorArg}) {
          ${constructorBody.join('')}
        }
      }`
    )
  }
  
}

class CodeBuilder
{
  constructor(className)
  {
    this.class = new Class(className);
  }

  addField(name)
  {
    this.class.fields.push(new Field(name));
    return this;
  }

  toString()
  {
    return this.class.toString();
  }
}

const cb  = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());