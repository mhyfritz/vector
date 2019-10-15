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
