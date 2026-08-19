# Count Partitions With Prime Starts

## Description

You are given a string `s` drawn from the digits `'1'` through `'9'`, plus two
integers `k` and `minLength`.

Cut `s` into exactly `k` consecutive, non-overlapping pieces so that every
piece obeys all three rules:

- it is at least `minLength` characters long,
- its first digit is prime — `'2'`, `'3'`, `'5'`, or `'7'`,
- its last digit is not prime — `'1'`, `'4'`, `'6'`, `'8'`, or `'9'`.

Count the ways to make such a cut. The count can be huge, so return it modulo
`10⁹ + 7`.

### Example 1

```text
Input: s = "24365871", k = 3, minLength = 1
Output: 3
Explanation: The three legal cuts are:
"24 | 36 | 5871"
"24 | 3658 | 71"
"2436 | 58 | 71"
Every piece opens on a prime digit — 2, 3, or 5 — and closes on a non-prime
one — 4, 6, 8, or 1.
```

### Example 2

```text
Input: s = "24365871", k = 4, minLength = 1
Output: 1
Explanation: Four pieces leave no freedom: each must be exactly the pair
"24 | 36 | 58 | 71". Merging any two neighbours would leave only three
pieces.
```

### Example 3

```text
Input: s = "53628194", k = 2, minLength = 3
Output: 1
Explanation: A first piece ending on a non-prime digit must end at the 6, so
the only candidate is "536 | 28194" — and both sides clear minLength = 3.
Asking for minLength = 4 instead would starve the first piece and give 0.
```

### Constraints

- `1 <= k, minLength <= s.length <= 1000`
- `s` contains only the digits `'1'` through `'9'`.

## Hints

### Hint 1

Where can a cut legally fall? Characterize the positions that may begin a
piece and those that may end one — everything else about the piece's content
is irrelevant.

### Hint 2

Let `dp[i][j]` count the ways to cut the first `i` characters into `j`
rule-abiding pieces; the last piece is some suffix `s[x:i]`.

### Hint 3

The transition sums `dp[x][j-1]` over eligible starts `x`, which is an
interval sum — keep a running prefix over prime-start positions in each layer
so every cell is a single lookup.
