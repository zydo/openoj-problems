# Range Flips and Running Totals

## Description

You are given two 0-indexed arrays of the same length: `bits`, whose entries
are all `0` or `1`, and `values`. You are also given an array `queries` of
instructions, each one of three kinds:

- `[1, l, r]` — flip every entry of `bits` from index `l` through `r`: each
  `0` becomes `1` and each `1` becomes `0`.
- `[2, p, 0]` — add `bits[i] * p` to `values[i]`, for every index `i`.
- `[3, 0, 0]` — record the current sum of `values`.

Apply the instructions in order and return every recorded sum, in the order
it was recorded.

### Example 1

```text
Input: bits = [1,0,1,0], values = [2,3,4,5],
       queries = [[1,1,2],[2,3,0],[3,0,0],[2,2,0],[3,0,0]]
Output: [20,24]
Explanation: Flipping indices 1..2 turns bits into [1,1,0,0]. Adding
bits[i] * 3 to every entry raises the sum of values from 14 to 14 + 2*3 = 20.
A second add with p = 2 gives 20 + 2*2 = 24, so the records are [20,24].
```

### Example 2

```text
Input: bits = [0,1], values = [7,7],
       queries = [[3,0,0],[1,0,1],[2,5,0],[3,0,0]]
Output: [14,19]
Explanation: The first record is the untouched sum, 7 + 7 = 14. Flipping both
entries leaves one bit set, so the add with p = 5 contributes 5 and the second
record is 19.
```

### Example 3

```text
Input: bits = [1], values = [9],
       queries = [[2,4,0],[1,0,0],[2,4,0],[3,0,0]]
Output: [13]
Explanation: The first add contributes 4*1 = 4. After the flip no bit is set,
so the second add contributes nothing and the recorded sum is 9 + 4 = 13.
```

### Constraints

- `1 <= bits.length, values.length <= 10⁵`
- `bits.length == values.length`
- `1 <= queries.length <= 10⁵`
- `queries[i].length == 3`
- `0 <= l <= r <= bits.length - 1`
- `0 <= p <= 10⁶`
- `bits[i]` is `0` or `1`
- `0 <= values[i] <= 10⁹`
- Each recorded sum fits in a signed 64-bit integer.

## Hints

### Hint 1

An add instruction never needs the whole `values` array — only how much it
changes the total, which depends on a single property of `bits`.

### Hint 2

Flipping a run of 0/1 entries swaps zeros and ones, so the count of ones in
any fully flipped segment is just the segment's length minus its previous
count. That is the whole update rule for a tree over `bits`.

### Hint 3

A lazy segment tree supports the flip on a range in logarithmic time and
always knows the total number of ones — read it at the root without pushing.

### Hint 4

Carry `sum(values)` in a variable: an add shifts it by `p` times the current
number of ones, and a record appends it as it stands.
