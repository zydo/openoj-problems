# Place-Value Pieces

## Description

You are given a positive integer `n`.

Call a positive integer a _place-value piece_ when it equals one digit from
`1` to `9` multiplied by some power of ten — written out, that is a lone
nonzero digit trailed by any number of zeros. The values `7000`, `80`, and
`5` all qualify; `7805`, `7008`, and `55` do not.

Break `n` into a sum of as few place-value pieces as possible, and return
those pieces ordered from largest to smallest.

### Example 1

```text
Input: n = 9306
Output: [9000,300,6]
Explanation: 9306 comes apart as 9000 + 300 + 6. Each of its three nonzero
digits forces one piece, so no split built from two or fewer pieces exists.
```

### Example 2

```text
Input: n = 1000000
Output: [1000000]
Explanation: 1000000 is already a single place-value piece on its own.
```

### Example 3

```text
Input: n = 4821
Output: [4000,800,20,1]
Explanation: four nonzero digits mean four pieces, and that count is the
minimum any valid split of 4821 can reach.
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

Scan the digits of `n` starting from the lowest place.

### Hint 2

Every nonzero digit is the seed of exactly one piece, so the piece count is
fixed by the digit pattern alone.

### Hint 3

Emit each nonzero digit scaled by the place it occupies, then read the
pieces from the highest place down to the lowest.
