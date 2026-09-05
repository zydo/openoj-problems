# Fibonacci Digit Split

## Description

Given a digit string `num`, divide it into consecutive decimal pieces that
form a Fibonacci-style sequence. Every value must be a nonnegative signed
32-bit integer, the sequence must contain at least three values, and each
value after the first two must equal the sum of the preceding pair.

A piece may not have a leading zero unless the piece is exactly `"0"`. When
more than one valid division exists, return the one found by trying the first
piece from shortest to longest and, for each choice, trying the second piece
from shortest to longest. Once those first two pieces are selected, every
remaining value is forced. Return `[]` if no valid division uses the whole
string.

### Example 1

```text
Input: num = "123456579"
Output: [123,456,579]
Explanation: The last value is the sum of the preceding two values.
```

### Example 2

```text
Input: num = "0000"
Output: [0,0,0,0]
```

### Example 3

```text
Input: num = "1234567"
Output: []
Explanation: No valid sequence consumes every digit.
```

### Constraints

- `num` has from `1` to `200` characters.
- `num` contains decimal digits only.
