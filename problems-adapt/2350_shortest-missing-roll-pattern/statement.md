# Shortest Missing Roll Pattern

## Description

You are given an integer array `rolls` of length `n` and an integer `k`:
`rolls` records `n` throws of a `k`-sided die whose faces are numbered `1`
through `k`, with `rolls[i]` being how the `i`-th throw landed.

A pattern is any sequence of die faces, such as `[2,3,3]`. A pattern occurs
in the log when it reads off as a subsequence of `rolls` — the throws need
not be consecutive, only in order.

Return the smallest length `L` for which some pattern of length `L` fails to
occur in the log.

### Example 1

```text
Input: rolls = [2,1,3,1,2,3,3,2], k = 3
Output: 3
Explanation: All three faces show up, and then all three show up again, so
every pattern of length 1 and every pattern of length 2 occurs. Length 3
already has gaps: after matching [3,2] against the throws at positions 2 and
4, no later throw lands on 1, so the pattern [3,2,1] does not occur.
```

### Example 2

```text
Input: rolls = [1,1,2,1], k = 2
Output: 2
Explanation: Both faces appear, so every length-1 pattern occurs. The face 2
is thrown only once, so no second 2 can follow it and the pattern [2,2] does
not occur.
```

### Example 3

```text
Input: rolls = [3,1,1,2,3,2,1], k = 4
Output: 1
Explanation: Face 4 is never thrown, so the pattern [4] already fails to
occur.
```

### Constraints

- `n == rolls.length`
- `1 <= n <= 10⁵`
- `1 <= rolls[i] <= k <= 10⁵`

## Hints

### Hint 1

Read the log from the start: how far in do you get before every one of the
`k` faces has shown at least once?

### Hint 2

Continue reading from that point: how far until every face has shown again,
and what does that second full stretch let you do that the first did not?

### Hint 3

Every full stretch of all `k` faces extends coverage to patterns one throw
longer — so count the stretches.
