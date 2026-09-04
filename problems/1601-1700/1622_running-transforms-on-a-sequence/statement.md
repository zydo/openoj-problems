# Running Transforms On A Sequence

## Description

Maintain a growing sequence of integers under global transforms: add a
constant to every element, multiply every element by a constant, and read
individual elements back — all without ever touching every element
one-by-one on each transform.

Implement the `AffineSequence` class:

- `AffineSequence()` initializes an empty sequence.
- `void append(int val)` appends `val` to the end of the sequence.
- `void shiftAll(int inc)` adds `inc` to every element currently in the
  sequence.
- `void scaleAll(int m)` multiplies every element currently in the
  sequence by `m`.
- `int getIndex(int idx)` returns the current value of the `idx`-th
  (0-indexed) element of the sequence.

### Example 1

```text
Input:
["AffineSequence","append","shiftAll","append","scaleAll","getIndex","append","getIndex"]
[[],[4],[3],[7],[2],[0],[9],[1]]
Output: [null,null,null,null,null,14,null,14]
Explanation: The sequence starts [4]. Shifting by 3 makes [7]. Appending
7 gives [7,7]. Scaling by 2 doubles both: [14,14], so index 0 reads 14.
Appending 9 gives [14,14,9], and index 1 reads 14.
```

### Constraints

- `1 <= val, inc, m <= 100`
- `0 <= idx <= 10⁵`
- At most `10⁵` calls in total are made to `append`, `shiftAll`,
  `scaleAll`, and `getIndex`.
- `getIndex` is always called with an `idx` in bounds.

## Hints

### Hint 1

Every transform seen by an element can be folded into one affine map
`value → m * value + inc`.

### Hint 2

Keep a global multiplicative factor and a global additive offset; each
appended element stores the factor/offset values at its birth so its
current value is derivable in O(1).
