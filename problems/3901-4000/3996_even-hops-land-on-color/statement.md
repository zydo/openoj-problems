# Even Hops Land On Color

## Description

You are given two cells of a standard `8 x 8` chessboard, `start` and
`target`, each written as `[x, y]`.

Decide whether a knight can travel from `start` to `target` using an even
number of hops. A hop is the usual knight jump: two squares one way and one
square sideways.

![diagram](figures/3996-1.svg)

### Example 1

```text
Input: start = [0,0], target = [1,1]
Output: true
Explanation:
    A four-hop ride does it:
    (0, 0) -> (2, 1) -> (4, 2) -> (2, 3) -> (1, 1).
    Four is even, so the answer is true.
```

### Example 2

```text
Input: start = [7,7], target = [6,5]
Output: false
Explanation: The two squares sit on opposite board colors, so every route
between them takes an odd number of hops.
```

### Example 3

```text
Input: start = [2,3], target = [5,4]
Output: true
Explanation:
    Two hops suffice: (2, 3) -> (4, 2) -> (5, 4).
```

### Example 4

```text
Input: start = [0,0], target = [0,1]
Output: false
Explanation: Adjacent squares always differ in color, and an even number
of knight hops can never change the color.
```

### Constraints

- `start.length == target.length == 2`
- `0 <= start[i], target[i] <= 7`

## Hints

### Hint 1

Paint the board like a real chessboard: a square's color is the parity of
`x + y`.

### Hint 2

Each knight hop shifts `x` by two and `y` by one (or the reverse), so the
parity of `x + y` flips on every hop. After an even number of hops the
knight must stand on its starting color again.

### Hint 3

The knight graph of the `8 x 8` board is connected — every square reaches
every other — so the same-color test is the whole answer: compare
`(start[0] + start[1]) % 2` with `(target[0] + target[1]) % 2`.
