# Score Range Over K Cuts

## Description

You are given an integer array `weights` of length `n` and an integer `k` with
`1 <= k <= n`.

Cut the array into exactly `k` consecutive, non-empty pieces. A piece that
spans positions `i` through `j` scores `weights[i] + weights[j]` — the values
at its two ends — and the score of a whole cutting is the sum over its `k`
pieces. A piece of length 1 has one end value, counted twice.

Different cuttings score differently. Return the difference between the best
and the worst achievable score.

### Example 1

```text
Input: weights = [2,4,3,6], k = 2
Output: 3
Explanation: The three cuttings score 14, 15 and 17:
[2] | [4,3,6]    ->  (2+2) + (4+6)  = 14
[2,4] | [3,6]    ->  (2+4) + (3+6)  = 15
[2,4,3] | [6]    ->  (2+3) + (6+6)  = 17
The difference between best and worst is 17 - 14 = 3.
```

### Example 2

```text
Input: weights = [5,1,1,5], k = 3
Output: 4
Explanation: The best cutting is [5,1] | [1] | [5] for (5+1) + (1+1) + (5+5)
= 22, and the worst is [5] | [1] | [1,5] for (5+5) + (1+1) + (1+5) = 18.
The difference is 4.
```

### Example 3

```text
Input: weights = [7,2,9], k = 1
Output: 0
Explanation: With one piece there is exactly one cutting, so best and worst
coincide.
```

### Constraints

- `1 <= k <= weights.length <= 10⁵`
- `1 <= weights[i] <= 10⁹`
- The answer fits in a signed 64-bit integer.

## Hints

### Hint 1

Every piece is a consecutive run, so a cutting is fully described by where
its `k - 1` cut points sit — and only the elements adjacent to a cut point
can tell two cuttings apart.

### Hint 2

The outermost elements `weights[0]` and `weights[n-1]` are ends of a piece in
every cutting alike. A cut between positions `i` and `i + 1` contributes
`weights[i] + weights[i + 1]`, because those two elements become ends of the
two pieces the cut separates.

### Hint 3

A cutting's score is the fixed pair of outer ends plus the sum of its
`k - 1` chosen adjacent-pair values. That reduces the question to: what do
the `k - 1` largest pair values sum to, and the `k - 1` smallest?

### Hint 4

Handle `k = 1` before the formula — there are no pair values to choose, and
the difference is `0`.
