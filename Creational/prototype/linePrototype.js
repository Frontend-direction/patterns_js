class Serializer {
  constructor(types) {
    this.types = types;
  }

  markObject(obj) {
    const index = this.types.findIndex(type => type === obj.constructor.name);
    if(index !== -1) {
      obj['mark_index'] = index;
      for(let prop in obj) {
        if(obj.hasOwnProperty(prop) && obj[prop] !== null )
        this.markObject(obj[prop]);
      }
    }
  }

  recreatObject(object) {
    if(object.hasOwnProperty('mark_index')) {
      const type = this.types[obj.mark_index];
      let obj = new type();

      for (let key in object) {
        if (object.hasOwnProperty(key) && object[key] != null) {
          obj[key] = this.recreatObject(object[key]);
        }
      }

      delete obj.typeIndex;
      return obj;
    }

    return object;
  }

  clone(object) {
    this.markObject(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.recreatObject(copy);
  }
}

class Point
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }
}

class Line
{
  constructor(start, end)
  {
    this.start = start;
    this.end = end;
  }

  deepCopy()
  {
    return Line.serializer.clone(this);
  }
}

Line.serializer = new Serializer([Line, Point]);



const line1 = new Line(new Point(1,2), new Point(5,4));
const line2 = line1.deepCopy();
line2.start = new Point(0,0);

console.log('line1', line1);
console.log('line2', line2);