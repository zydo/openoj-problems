# Emptying Ranges Two Divides At A Time

## Description

Each entry of a 2D array `queries` is a pair `[l, r]` naming the array of
every integer from `l` through `r`. Work on that array with operations: one
operation picks two elements and replaces each of them with its value
floor-divided by 4.

Every element must end at 0. Return the sum over all queries of the fewest
operations each range requires.

### Example 1

```text
Input: queries = [[1,5]]
Output: 4
Explanation: The range holds [1,2,3,4,5]. First wipe out 1 and 2 together,
then 3 and 4, leaving [0,0,0,1,5]. One more operation turns 1 into 0 and 5
into 1, and a final operation pairs the leftover 1 with any already-zero
slot. Four operations in all — the elements need 7 division steps, and
each operation performs two.
```

### Example 2

```text
Input: queries = [[10,12]]
Output: 3
Explanation: The range holds [10,11,12], and every element needs exactly
two divides. Divide 10 and 11 together, then 12 and 10, then the two
survivors — three operations cover the six required steps.
```

### Example 3

```text
Input: queries = [[1,2],[9,16]]
Output: 10
Explanation: [1,2] needs one step per element, cleared in a single paired
operation. [9,16] needs 17 steps in total (2 each for 9 through 15, and 3
for 16), so it takes ceil(17 / 2) = 9 operations. The answer is 1 + 9 = 10.
```

### Constraints

- `1 <= queries.length <= 10⁵`
- `queries[i].length == 2`
- `queries[i] == [l, r]`
- `1 <= l < r <= 10⁹`

## Hints

### Hint 1

Reaching 0 takes one divide per base-4 band: a value in `[4^(k-1), 4^k)`
needs exactly `k` divides. A range's total step count therefore follows
from how far it reaches into the powers of 4.

### Hint 2

An operation carries out two divides at once and divides never interfere,
so a range needing `S` steps in total is finished in `ceil(S / 2)`
operations — a pairing that realizes this always exists.
