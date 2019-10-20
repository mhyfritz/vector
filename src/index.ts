const TWO_PI: number = 2 * Math.PI;

export class Vector2d {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  clone(): Vector2d {
    return new Vector2d(this.x, this.y);
  }

  add(vec: Vector2d): Vector2d {
    const ret = this.clone();
    return ret.$add(vec);
  }

  $add(vec: Vector2d): Vector2d {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  }

  sub(vec: Vector2d): Vector2d {
    const ret = this.clone();
    return ret.$sub(vec);
  }

  $sub(vec: Vector2d): Vector2d {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  }

  mult(n: number): Vector2d {
    const ret = this.clone();
    return ret.$mult(n);
  }

  $mult(n: number): Vector2d {
    this.x *= n;
    this.y *= n;
    return this;
  }

  div(n: number): Vector2d {
    const ret = this.clone();
    return ret.$div(n);
  }

  $div(n: number): Vector2d {
    this.x /= n;
    this.y /= n;
    return this;
  }

  mag(m?: number): Vector2d | number {
    if (m) {
      const ret = this.clone();
      return ret.$mag(m);
    }
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  $mag(m: number): Vector2d {
    this.$normalize();
    this.$mult(m);
    return this;
  }

  normalize(): Vector2d {
    const ret = this.clone();
    return ret.$normalize();
  }

  $normalize(): Vector2d {
    const m = <number>this.mag();
    if (m !== 0) {
      this.$div(m);
    }
    return this;
  }

  limit(maxMag: number): Vector2d {
    const ret = this.clone();
    return ret.$limit(maxMag);
  }

  $limit(maxMag: number): Vector2d {
    if (this.mag() > maxMag) {
      this.$mag(maxMag);
    }
    return this;
  }

  direction(): Number {
    return Math.atan(this.y / this.x);
  }

  /* credits: p5.js */
  static fromAngle(angle: number, length = 1): Vector2d {
    return new Vector2d(length * Math.cos(angle), length * Math.sin(angle));
  }

  static random(): Vector2d {
    return this.fromAngle(Math.random() * TWO_PI);
  }
}
