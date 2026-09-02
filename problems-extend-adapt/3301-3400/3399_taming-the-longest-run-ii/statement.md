# Taming The Longest Run II

## Description

In a binary string, a run is a maximal block made of one repeated character.
You are given a binary string `s` and an integer `numOps`. At most `numOps`
times, you may choose a position in `s` and flip that bit — a `'0'` becomes
`'1'`, or a `'1'` becomes `'0'`. Arrange the flips so the longest run left in
`s` is as short as it can be, and return that minimum length.

### Example 1

```text
Input: s = "100011", numOps = 1
Output: 2
Explanation: Spending the flip inside the "000" block, say on its middle
character, gives s = "101011". The longest runs left are pairs like "11", so
the answer is 2.
```

### Example 2

```text
Input: s = "000000000", numOps = 1
Output: 4
Explanation: A single flip splits the nine 0s into two groups, and the best
split — for example s = "000010000" — leaves a group of four. No single flip
can do better, so the answer is 4.
```

### Example 3

```text
Input: s = "010101", numOps = 0
Output: 1
Explanation: Already perfectly alternating, every run has length 1.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of `'0'` and `'1'`.
- `0 <= numOps <= s.length`

## Hints

### Hint 1

More allowed flips can only shrink the achievable longest run, so binary-search
the cap.

### Hint 2

With a cap of 2 or more, a run of length `L` costs `floor(L / (m + 1))`
flips: cut it into groups of size `m + 1` and flip the last character of each
group but the final one.

### Hint 3

A cap of exactly 1 is the special case: it asks for the cheaper of the two
ways to make `s` fully alternate.
