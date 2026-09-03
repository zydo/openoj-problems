# The Cheapest Way To Slice A Bit String

## Description

You are given a binary string `s` and two integers `encCost` and
`flatCost`. Position `i` of the string is flagged when `s[i] = '1'` and
unflagged when `s[i] = '0'`.

The string is to be cut into contiguous segments, starting from a single
segment that spans the whole string. A segment of length `L` holding `X`
flagged positions is priced as follows:

- When `X = 0`, the segment costs `flatCost`.
- When `X > 0`, the segment costs `L * X * encCost`.

One further move exists: any segment whose length is even may be cut in
half, into two contiguous segments of equal length, and from then on each
half is priced by the same rules.

Over every legal way of cutting, return the smallest total price the
segments can add up to.

### Example 1

```text
Input: s = "1101", encCost = 2, flatCost = 3
Output: 8
Explanation: Keeping the whole string together would cost 4 * 3 * 2 = 24.
Cutting it in half gives "11" and "01". The half "11" is worth slicing
again, into "1" and "1" at 2 + 2 = 4, while the half "01" is cheapest left
alone at 2 * 1 * 2 = 4. The best total is 4 + 4 = 8.
```

### Example 2

```text
Input: s = "0110", encCost = 5, flatCost = 1
Output: 12
Explanation: The whole string would cost 4 * 2 * 5 = 40. Halving it gives
"01" and "10", and halving again leaves the four single characters "0",
"1", "1", "0" priced 1, 5, 5, 1. The total 12 beats every coarser option.
```

### Example 3

```text
Input: s = "10", encCost = 4, flatCost = 9
Output: 8
Explanation: The whole string costs 2 * 1 * 4 = 8. Splitting it would price
the singles at 4 + 9 = 13, so the unsplit string is cheaper and the answer
is 8.
```

### Example 4

```text
Input: s = "111", encCost = 1, flatCost = 100
Output: 9
Explanation: An odd-length segment can never be cut in half, so the whole
string must be priced as one segment: 3 * 3 * 1 = 9.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of '0' and '1'.
- `1 <= encCost, flatCost <= 10⁵`

## Hints

### Hint 1

Think recursively about a single segment: pay its own price, or — when its
length is even — cut it into two equal halves and pay the best price of
each.

### Hint 2

A segment's own price only needs its length and its count of flagged
positions: `flatCost` when the count is zero, otherwise length times count
times `encCost`.

### Hint 3

Prefix sums of the '1' characters answer any segment's count in constant
time.

### Hint 4

Halving always produces disjoint intervals, so no segment is ever reached
twice and a plain recursion suffices.
