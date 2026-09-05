# Even-Xor Triplets II

## Description

You are handed three arrays of integers named `a`, `b`, and `c`. A triplet
is one element taken from each array, and every index combination forms its
own triplet — the three arrays are independent of each other and values may
repeat across or within them.

Count how many of those triplets XOR down to a value holding an even number
of set bits, and return the total.

### Example 1

```text
Input: a = [7], b = [11], c = [4]
Output: 0
Explanation: The only combination available XORs to 7 ^ 11 ^ 4 = 8, and
8 = 1000 in binary carries a single set bit — odd, so the count stays at
zero.
```

### Example 2

```text
Input: a = [2, 9], b = [5], c = [3, 8]
Output: 2
Explanation: The qualifying picks are (2, 5, 8) and (9, 5, 3); each XORs
to 15, whose binary form 1111 holds four set bits. The remaining two
combinations end with an odd number of set bits.
```

### Constraints

- `1 <= a.length, b.length, c.length <= 10⁵`
- `0 <= a[i], b[i], c[i] <= 10⁹`

## Hints

### Hint 1

Take two values whose popcounts are both even. What parity does their
XOR's popcount have?

### Hint 2

Repeat the check when exactly one of the two values carries an odd
popcount instead.

### Hint 3

The two observations combine: three values XOR to an even-popcount result
precisely when an even number of them — zero or two — began with odd
popcounts.

### Hint 4

Per array, all that matters is how many elements fall on each parity, so
tally both classes and multiply the tallies across the qualifying parity
patterns.
