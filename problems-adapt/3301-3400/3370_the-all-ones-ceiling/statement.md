# The All-Ones Ceiling

## Description

Given a positive integer `n`, find the smallest integer `x` with
`x >= n` whose binary form is nothing but 1s — no zero bit anywhere.

Return that value of `x`.

### Example 1

```text
Input: n = 1
Output: 1
Explanation: 1 is already written in binary as "1", a single set bit, so
it is its own ceiling.
```

### Example 2

```text
Input: n = 23
Output: 31
Explanation: 23 reads "10111" in binary, so it carries a zero bit. Every
value from 23 up to 30 keeps at least one zero, and the first all-ones
number that follows is 31, binary "11111".
```

### Example 3

```text
Input: n = 512
Output: 1023
Explanation: 512 is itself a power of two, "1000000000", so every number
from 512 up to 1022 carries at least one zero bit. The first all-ones
value at or above it is 1023, binary "1111111111".
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

The values whose bits are all set are exactly the powers of two minus
one; jump to the first such value that does not fall below `n`.
