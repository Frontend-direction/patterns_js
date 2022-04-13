class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  static get factory() {
    return PointFactory;
  }
}

class PointFactory {
  static createCartesianPoint(x, y) {
    return new Point(x,y);
  }

  static createPolarPoint(rho, theta) {
    return new Point(
      rho*Math.cos(theta),
      rho*Math.sin(theta)
    );
  }
}

console.log('Cartesian coords', Point.factory.createCartesianPoint(10,5));
console.log('Polar coords', Point.factory.createPolarPoint(5,Math.PI / 2));


