class VectorRenderer
{
  renderSquare(side)
  {
    console.log(`Drawing a square of side ${side}`);
  }
  get whatToRenderAs()
  {
    return 'lines';
  }
}

class RasterRenderer
{
  renderSquare(side)
  {
    console.log(`Drawing pixels for suare of side ${side}`);
  }

  get whatToRenderAs()
  {
    return 'pixels';
  }
}

class Shape
{
  constructor(renderer, name) {
    this.renderer = renderer;
    this.name = name;
  }
  toString()
  {
    return `Drawing ${this.name} as ${this.renderer.whatToRenderAs}`;
  }
}

class Triangle extends Shape
{
  constructor(renderer)
  {
    super(renderer, 'triangle');
  }
}

class Square extends Shape
{
  constructor(renderer, side)
  {
    super(renderer, 'square');
    this.side = side;
  }

  render() {
    this.renderer.renderSquare(this.side);
  }
}

let sq = new Square(new VectorRenderer());
console.log(sq.toString())

// class VectorSquare extends Square
// {
//   toString()
//   {
//     return `Drawing square as lines`;
//   }
// }

// class RasterSquare extends Square
// {
//   toString()
//   {
//     return `Drawing square as pixels`;
//   }
// }

// imagine VectorTriangle and RasterTriangle are here too