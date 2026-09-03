# The Zigzag Summit

## Description

You are given three integers `n`, `s`, and `m`.

Think of building a zigzag sequence `seq` of exactly `n` integers that
satisfies all of the following:

- It starts at `seq[0] = s`.
- It alternates strictly the whole way through — either
  `seq[0] < seq[1] > seq[2] < ...` or `seq[0] > seq[1] < seq[2] > ...`.
  A sequence with a single element counts as alternating.
- Every step is bounded: `|seq[i] - seq[i - 1]| <= m` for each adjacent pair.

How high can such a walk climb? Return the largest value that any element of
any valid sequence can reach.

### Example 1

```text
Input: n = 6, s = 2, m = 4
Output: 12
Explanation:
    The walk [2, 6, 5, 9, 8, 12] rises, dips, rises, dips, rises. Every step
    is at most 4, and the last element 12 is the summit.
```

### Example 2

```text
Input: n = 5, s = 7, m = 10
Output: 26
Explanation:
    One valid walk is [7, 17, 16, 26, 25], whose peak 26 beats any peak
    reachable by starting with a drop.
```

### Example 3

```text
Input: n = 1, s = 9, m = 4
Output: 9
Explanation:
    With a single element there is nothing to climb — the sequence is [9].
```

### Example 4

```text
Input: n = 2, s = 5, m = 1
Output: 6
Explanation:
    A single rise of exactly 1 gives [5, 6]; there is no room to climb
    further.
```

### Constraints

- `1 <= n, s <= 10^9`
- `1 <= m <= 10^5`

## Hints

### Hint 1

A high point is reached most cheaply by taking a full step of size `m`
upward, so every rise should use the whole budget.

### Hint 2

Two rises cannot be adjacent. Between consecutive highs the walk must dip,
and the cheapest possible dip is a fall of exactly `1`.

### Hint 3

So after the very first high, each further high costs two positions and is
worth only `m - 1` more than the previous one.

### Hint 4

The two alternating rhythms — rise first versus drop first — reach slightly
different first highs; take the better of the two.

### Hint 5

Watch out for `n == 1`: the answer is simply `s`, and no step is ever taken.
