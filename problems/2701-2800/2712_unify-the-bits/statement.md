# Unify the Bits

## Description

A binary string `s` of length `n` needs to end up with every character
identical. Two operations are on offer, each usable any number of times in
any order:

- Pick an index `i` and flip every character in the segment `s[0..i]`
  (inclusive). This costs `i + 1`.
- Pick an index `i` and flip every character in the segment `s[i..n-1]`
  (inclusive). This costs `n - i`.

Flipping a character swaps it between `'0'` and `'1'`. Return the smallest
total cost that leaves the string uniform.

### Example 1

```text
Input: s = "1100"
Output: 2
Explanation: One suffix flip with i = 2 turns the last two characters over,
giving "1111" at a cost of 4 - 2 = 2. Nothing cheaper exists.
```

### Example 2

```text
Input: s = "1010"
Output: 4
Explanation: Flip index 0 (cost 1) to get "0010", then indices 0..1
(cost 2) to get "1110", then flip index 3 (cost 1) to get "1111". The total
is 4, and no cheaper plan equalizes the string.
```

### Example 3

```text
Input: s = "1"
Output: 0
Explanation: A one-character string is already uniform.
```

### Constraints

- `1 <= s.length == n <= 10^5`
- every character of `s` is `'0'` or `'1'`

## Hints

### Hint 1

Scan the borders where `s[i-1]` differs from `s[i]`; each such boundary has
to be crossed by exactly one odd-count flip, on one side or the other.

### Hint 2

A prefix flip ending at `i-1` (cost `i`) flips only the left neighbor of
border `i`, and a suffix flip starting at `i` (cost `n - i`) flips only its
right neighbor.

### Hint 3

So each differing border independently costs `min(i, n - i)`, and the
answer is the sum over all differing borders.
