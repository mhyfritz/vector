[![GitHub Actions status | mhyfritz/vector](https://github.com/mhyfritz/vector/workflows/Unit%20tests/badge.svg)](https://github.com/mhyfritz/vector/actions?workflow=Unit+tests)

# vector

Euclidean (geometric) vectors with an immutable and mutable API.
Currently, 2D vectors only.

## Installation

```bash
npm install @mhyfritz/vector
```

## Usage

Node:

```javascript
const { Vector2d } = require("@mhyfritz/vector");

// or

import { Vector2d } from "@mhyfritz/vector";
```

Browser:

```html
<!-- import from unpkg -->
<script src="https://unpkg.com/@mhyfritz/vector"></script>

<!-- import from jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/@mhyfritz/vector"></script>

<!-- usage; module is globally registered as `mhyfritzVector` -->
<script>
  const { Vector2d } = mhyfritzVector;
  new Vector2d(2, 8);
</script>
```

## API

### `new Vector2d(x, y)`

Creates a new 2D vector.

```javascript
import { Vector2d } from "@mhyfritz/vector";

new Vector2d(2, 8);
// Vector2d { x: 2, y: 8 }
```

The "default" (non-prefixed) methods return a new vector and don't mutate the original one, while methods prefixed with `$` mutate the caller.

### `.clone()`

Clones a vector.

```javascript
const a = new Vector2d(2, 8);
const b = a.clone();
// `b` is `Vector2d { x: 2, y: 8 }`
```

### `.add(<Vector2d>)`

Adds two vectors without mutating the caller.

```javascript
const a = new Vector2d(2, 8);
const b = new Vector2d(32, 128);
const c = a.add(b);
// `c` is `Vector2d { x: 34, y: 136 }`
// `a` is `Vector2d { x: 2, y: 8 }`
```

### `.$add(<Vector2d>)`

Adds two vectors and mutates the caller.

```javascript
const a = new Vector2d(2, 8);
const b = new Vector2d(32, 128);
a.$add(b);
// `a` is `Vector2d { x: 34, y: 136 }`
```

### `.sub(<Vector2d>)`

Subtracts two vectors without mutating the caller.

```javascript
const a = new Vector2d(2, 8);
const b = new Vector2d(32, 128);
const c = a.sub(b);
// `c` is `Vector2d { x: -30, y: -120 }`
// `a` is `Vector2d { x: 2, y: 8 }`
```

### `.$sub(<Vector2d>)`

Subtracts two vectors and mutates the caller.

```javascript
const a = new Vector2d(2, 8);
const b = new Vector2d(32, 128);
a.$sub(b);
// `a` is `Vector2d { x: -30, y: -120 }`
```

### `.mult(<number>)`

Performs scalar multiplication without mutating the caller.

```javascript
const a = new Vector2d(2, 8);
const b = a.mult(2);
// `b` is `Vector2d { x: 4, y: 16 }`
// `a` is `Vector2d { x: 2, y: 8 }`
```

### `.$mult(<number>)`

Performs scalar multiplication and mutates the caller.

```javascript
const a = new Vector2d(2, 8);
a.$mult(2);
// `a` is `Vector2d { x: 4, y: 16 }`
```

### `.div(<number>)`

Performs scalar division without mutating the caller.

```javascript
const a = new Vector2d(2, 8);
const b = a.div(2);
// `b` is `Vector2d { x: 1, y: 4 }`
// `a` is `Vector2d { x: 2, y: 8 }`
```

### `.$div(<number>)`

Performs scalar division and mutates the caller.

```javascript
const a = new Vector2d(2, 8);
a.$div(2);
// `a` is `Vector2d { x: 1, y: 4 }`
```

### `.mag()`

Returns the magnitude (length) of a vector.

```javascript
const a = new Vector2d(2, 8);
a.mag();
// 8.246...
```

### `.mag(<number>)`

Sets the magnitude (length) of a vector without mutating the caller.

```javascript
const a = new Vector2d(2, 8);
const b = a.mag(10);
// `b` is `Vector2d { x: 2.42..., y: 9.70... }`
// `a` is `Vector2d(2, 8)`
```

### `.$mag(<number>)`

Sets the magnitude (length) of a vector and mutates the caller.

```javascript
const a = new Vector2d(2, 8);
a.$mag(10);
// `a` is `Vector2d { x: 2.42..., y: 9.70... }`
```

### `.normalize()`

Sets the magnitude (length) of a vector to 1 (unit vector)
without mutating the caller.

```javascript
const a = new Vector2d(2, 8);
const b = a.normalize();
// `b` is `Vector2d { x: 0.24..., y: 0.97... }`
// `a` is `Vector2d { x: 2, y: 8 }`
b.mag(); // 1
```

### `.$normalize()`

Sets the magnitude (length) of a vector to 1 (unit vector)
and mutates the caller.

```javascript
const a = new Vector2d(2, 8);
a.$normalize();
// `a` is `Vector2d { x: 0.24..., y: 0.97... }`
a.mag(); // 1
```

### `.limit(<number>)`

Limits the magnitude (length) of a vector without mutating the caller.

```javascript
const a = new Vector2d(2, 8);
a.mag(); // 8.24...
const b = a.limit(5);
// `b` is `Vector2d { x: 1.21..., y: 4.85... }`
// `a` is `Vector2d { x: 2, y: 8 }`
b.mag(); // 5
```

### `.$limit(<number>)`

Limits the magnitude (length) of a vector and mutates the caller.

```javascript
const a = new Vector2d(2, 8);
a.$limit(5);
// `a` is `Vector2d { x: 1.21..., y: 4.85... }`
a.mag(); // 5
```

### `.direction()`

Computes a vector's direction / angle in _radians_.

```javascript
const a = new Vector2d(2, 0);
a.direction(); // 0
const b = new Vector2d(2, 2);
b.direction(); // 0.78... radians
(b.direction() / Math.PI) * 180; // 45 degrees
```

### `random()`

Static class method that returns a random unit vector.

```javascript
const a = Vector2d.random();
// Vector2d { x: 0.834182302094392, y: -0.5514887912482904 }
a.mag(); // 1
const b = Vector2d.random();
// Vector2d { x: 0.928078060616885, y: -0.37238570515206604 }
b.mag(); // 1
```

### `fromAngle(angle: number, length?: number)`

_(credits: p5.js)_

Static class method that creates a vector from a given angle and length.
If no length is specified, a unit vector (length 1) will be produced.
Angle has to be specified in _radians_.

```javascript
const a = Vector2d.fromAngle(2);
// Vector2d { x: -0.4161468365471424, y: 0.9092974268256817 }
a.mag(); // 1
const b = Vector2d.fromAngle(2, 5);
// Vector2d { x: -2.080734182735712, y: 4.546487134128409 }
b.mag(); // 5
```

### Chaining

Both, immutable and mutable methods are chainable.

```javascript
const a = new Vector2d(2, 8);
const b = new Vector2d(32, 128);

const c = a.add(b).div(10);
// `c` is `Vector2d { x: 3.4, y: 13.6 }`
// `a` is `Vector2d { x: 2, y: 8 }`

// to avoid unnecessary copies, we can also mix and match
const d = a.add(b).$div(10);
// `d` is `Vector2d { x: 3.4, y: 13.6 }`
// `a` is `Vector2d { x: 2, y: 8 }`

a.$add(b).$div(10);
// `a` is `Vector2d { x: 3.4, y: 13.6 }`

a.$normalize().mag(); // 1
// `a` is `Vector2d { x: 0.24..., y: 0.97... }`
```
