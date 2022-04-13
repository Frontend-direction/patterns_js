class Square {
  constructor(side)
  {
    this.side = side;
  }
}

class SquareToRectangleAdapter {
  constructor(square) {
    this.square = square;
  }

  get width() {
    return this.square.side;
  }

  get height() {
    return this.square.side;
  }
}

function area(rectangle) {
  return rectangle.width * rectangle.height;
}

// build an adapter called SquareToRectangleAdapter
// s.t. we could call
//
let sq = new Square(123);
console.log(area(new SquareToRectangleAdapter(sq)));