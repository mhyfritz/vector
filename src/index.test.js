const { Vector2d } = require("../");

test("[add] adds two vectors", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  expect(v.add(w)).toEqual({ x: 34, y: 136 });
});

test("[$add] adds two vectors", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  expect(v.$add(w)).toEqual({ x: 34, y: 136 });
});

test("[add] is immutable", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  v.add(w);
  expect(v).toEqual({ x: 2, y: 8 });
});

test("[$add] is mutable", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  v.$add(w);
  expect(v).toEqual({ x: 34, y: 136 });
});

test("[sub] subtracts two vectors", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  expect(v.sub(w)).toEqual({ x: -30, y: -120 });
});

test("[$sub] subtracts two vectors", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  expect(v.$sub(w)).toEqual({ x: -30, y: -120 });
});

test("[sub] is immutable", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  v.sub(w);
  expect(v).toEqual({ x: 2, y: 8 });
});

test("[$sub] is mutable", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  v.$sub(w);
  expect(v).toEqual({ x: -30, y: -120 });
});

test("[mult] does scalar multiplication", () => {
  const v = new Vector2d(2, 8);
  expect(v.mult(2)).toEqual({ x: 4, y: 16 });
});

test("[$mult] does scalar multiplication", () => {
  const v = new Vector2d(2, 8);
  expect(v.$mult(2)).toEqual({ x: 4, y: 16 });
});

test("[mult] is immutable", () => {
  const v = new Vector2d(2, 8);
  v.mult(2);
  expect(v).toEqual({ x: 2, y: 8 });
});

test("[$mult] is mutable", () => {
  const v = new Vector2d(2, 8);
  v.$mult(2);
  expect(v).toEqual({ x: 4, y: 16 });
});

test("[div] does scalar division", () => {
  const v = new Vector2d(2, 8);
  expect(v.div(2)).toEqual({ x: 1, y: 4 });
});

test("[$div] does scalar division", () => {
  const v = new Vector2d(2, 8);
  expect(v.$div(2)).toEqual({ x: 1, y: 4 });
});

test("[div] is immutable", () => {
  const v = new Vector2d(2, 8);
  v.div(2);
  expect(v).toEqual({ x: 2, y: 8 });
});

test("[$div] is mutable", () => {
  const v = new Vector2d(2, 8);
  v.$div(2);
  expect(v).toEqual({ x: 1, y: 4 });
});

test("[mag()] returns a vector's length", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  expect(v.mag()).toBeCloseTo(8.246211251235321);
  expect(w.mag()).toBeCloseTo(131.93938001976514);
});

test("[mag(n)] sets a vector's length", () => {
  const v = new Vector2d(2, 8);
  expect(v.mag(5).mag()).toBeCloseTo(5);
});

test("[$mag(n)] sets a vector's length", () => {
  const v = new Vector2d(2, 8);
  expect(v.$mag(5).mag()).toBeCloseTo(5);
});

test("[mag(n)] is immutable", () => {
  const v = new Vector2d(2, 8);
  v.mag(5);
  expect(v).toEqual({ x: 2, y: 8 });
});

test("[$mag(n)] is mutable", () => {
  const v = new Vector2d(2, 8);
  v.$mag(5);
  expect(v.x).toBeCloseTo(1.212678125181665);
  expect(v.y).toBeCloseTo(4.85071250072666);
});

test("[normalize] produces a unit vector", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  expect(v.normalize().mag()).toBeCloseTo(1);
  expect(w.normalize().mag()).toBeCloseTo(1);
});

test("[$normalize] produces a unit vector", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  expect(v.$normalize().mag()).toBeCloseTo(1);
  expect(w.$normalize().mag()).toBeCloseTo(1);
});

test("[normalize] is immutable", () => {
  const v = new Vector2d(2, 8);
  v.normalize();
  expect(v).toEqual({ x: 2, y: 8 });
});

test("[$normalize] is mutable", () => {
  const v = new Vector2d(2, 8);
  v.$normalize();
  expect(v.x).toBeCloseTo(0.24253562503633297);
  expect(v.y).toBeCloseTo(0.9701425001453319);
});

test("[limit] limits a vector's length", () => {
  const v = new Vector2d(2, 8); // mag is 8.24...
  expect(v.limit(10).mag()).toBeCloseTo(8.246211251235321);
  expect(v.limit(5).mag()).toBeCloseTo(5);
});

test("[$limit] limits a vector's length", () => {
  const v = new Vector2d(2, 8); // mag is 8.24...
  expect(v.$limit(10).mag()).toBeCloseTo(8.246211251235321);
  expect(v.$limit(5).mag()).toBeCloseTo(5);
});

test("[limit] is immutable", () => {
  const v = new Vector2d(2, 8);
  v.limit(5);
  expect(v).toEqual({ x: 2, y: 8 });
});

test("[$limit] is mutable", () => {
  const v = new Vector2d(2, 8);
  v.$limit(5);
  expect(v.x).toBeCloseTo(1.212678125181665);
  expect(v.y).toBeCloseTo(4.85071250072666);
});

test("[direction] returns a vector's direction / angle", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  expect(v.direction()).toBeCloseTo(1.3258176636680326);
  expect(w.direction()).toBeCloseTo(1.3258176636680326);
});

test("[distance] returns the Euclidean distance to another vector", () => {
  const v = new Vector2d(2, 8);
  const w = new Vector2d(32, 128);
  expect(v.distance(w)).toBeCloseTo(123.69316876852982);
  expect(v.distance(w)).toBeCloseTo(v.sub(w).mag());
});

test("[Vector2d.random] returns a unit vector", () => {
  expect(Vector2d.random().mag()).toBeCloseTo(1);
  expect(Vector2d.random().mag()).toBeCloseTo(1);
  expect(Vector2d.random().mag()).toBeCloseTo(1);
  expect(Vector2d.random().mag()).toBeCloseTo(1);
  expect(Vector2d.random().mag()).toBeCloseTo(1);
});

test("[Vector2d.fromAngle(a)] returns a unit vector", () => {
  expect(Vector2d.fromAngle(0).mag()).toBeCloseTo(1);
  expect(Vector2d.fromAngle((1 / 2) * Math.PI).mag()).toBeCloseTo(1);
  expect(Vector2d.fromAngle(Math.PI).mag()).toBeCloseTo(1);
  expect(Vector2d.fromAngle((3 / 2) * Math.PI).mag()).toBeCloseTo(1);
  expect(Vector2d.fromAngle(2 * Math.PI).mag()).toBeCloseTo(1);
});

test("[Vector2d.fromAngle(a,l)] returns a vector of given length", () => {
  expect(Vector2d.fromAngle(Math.PI, 2).mag()).toBeCloseTo(2);
  expect(Vector2d.fromAngle(Math.PI, 4).mag()).toBeCloseTo(4);
  expect(Vector2d.fromAngle(Math.PI, 8).mag()).toBeCloseTo(8);
  expect(Vector2d.fromAngle(Math.PI, 16).mag()).toBeCloseTo(16);
  expect(Vector2d.fromAngle(Math.PI, 32).mag()).toBeCloseTo(32);
});
