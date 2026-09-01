# Splitting an Apple Pizza

## Description

A rectangular pizza is given as a `rows x cols` grid of cells, each
cell either `'A'` (an apple) or `'.'` (empty). Split it into `k` pieces
using `k - 1` straight cuts.

Every cut follows cell boundaries and runs all the way across the piece
being cut, and you choose its direction. A vertical cut splits the
current piece into a left part and a right part, and the left part is
handed away; a horizontal cut splits it into a top part and a bottom
part, and the top part is handed away. The single piece that is never
handed away goes to the last person.

Count the ways to split the pizza so that each of the `k` pieces ends
up with at least one apple. The count can be enormous, so report it
modulo `10⁹ + 7`.

### Example 1

![diagram](figures/1444-1.svg)

```text
Input: pizza = ["A..","AAA","..."], k = 3
Output: 3
Explanation: The figure above shows the three valid ways to cut this
pizza. Every piece must contain at least one apple.
```

### Example 2

```text
Input: pizza = ["A..","..A","A.."], k = 3
Output: 3
Explanation: Three different cut sequences give every person a piece
with an apple on it.
```

### Example 3

```text
Input: pizza = ["A.","AA",".."], k = 2
Output: 2
Explanation: Two cut sequences leave both pieces with an apple each.
```

### Constraints

- `1 <= rows, cols <= 50`
- `rows == pizza.length`
- `cols == pizza[i].length`
- `1 <= k <= 10`
- `pizza` consists only of the characters `'A'` and `'.'`.

## Hints

### Hint 1

After any cut, the piece that keeps being cut is always the rectangle
whose bottom-right corner is the pizza's own bottom-right corner, so a
state only needs the current piece's top-left corner.

### Hint 2

Memoize `count(r, c, cutsLeft)`: the number of valid splittings of the
rectangle from `(r, c)` down to the bottom-right corner when `cutsLeft`
cuts remain.

### Hint 3

Try every horizontal and every vertical cut; both the handed-away strip
and the kept piece must still hold an apple. When no cuts remain, there
is exactly one way if the final piece holds an apple and none
otherwise.

### Hint 4

A two-dimensional prefix-sum over apples answers "does this rectangle
contain an apple?" in constant time.
