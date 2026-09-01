# Latest Run of Exact Length

## Description

You are given `arr`, a permutation of the integers `1` through `n`, and a
strip of `n` cells that all start off. Steps run from `1` to `n`: during
step `i` the cell at position `arr[i]` is switched on. Steps and
positions are both 1-indexed.

A run is a maximal block of consecutive switched-on cells — one that
cannot be lengthened by including a neighbouring cell.

Return the last step during which the strip contains a run of length
exactly `m`. If no step ever has such a run, return `-1`.

### Example 1

```text
Input: arr = [2,1,4,3], m = 1
Output: 3
Explanation: The strip reads "0100", "1100", "1101", "1111" after steps
1 through 4. A run of exactly 1 is present after step 1 and again after
step 3; by step 4 the whole strip is one run of length 4. The last step
with a run of length 1 is therefore step 3.
```

### Example 2

```text
Input: arr = [4,3,6,1,2,5], m = 2
Output: 4
Explanation: A run of length 2 first appears at step 2 and survives
through step 4, after which the next flips grow it into longer runs. The
answer is 4.
```

### Example 3

```text
Input: arr = [3,2,1], m = 3
Output: 3
```

### Constraints

- `n == arr.length`
- `1 <= m <= n <= 10⁵`
- `1 <= arr[i] <= n`
- All values in `arr` are distinct.

## Hints

### Hint 1

A newly switched-on cell can only create, extend, or merge runs through
its two immediate neighbours — everything elsewhere on the strip is
untouched by that step.

### Hint 2

Maintain, for each possible length, a tally of how many runs currently
have that length. The answer is the last step at which the tally for `m`
is positive.
