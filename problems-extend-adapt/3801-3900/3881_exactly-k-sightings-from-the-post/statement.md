# Exactly K Sightings From the Post

## Description

Three integers are given: `n`, `pos`, and `k`.

A line holds `n` people at positions `0` through `n - 1`. Every person
picks one of two facings:

- `'L'`: spotted only by people standing to their right
- `'R'`: spotted only by people standing to their left

A watcher stands at position `pos`. Another person `i` lands in the
watcher's view exactly when:

- `i < pos` and that person picked `'L'`, or
- `i > pos` and that person picked `'R'`.

How many facing assignments make the watcher count precisely `k` people?
Report the total modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 4, pos = 1, k = 1
Output: 6
Explanation:
    One person (index 0) stands to the left of the post and two
    (indices 2 and 3) stand to the right. Exactly one of the three must
    face the watcher, which can happen in 3 ways, and the watcher's own
    facing is free, giving 3 * 2 = 6 assignments.
```

### Example 2

```text
Input: n = 5, pos = 2, k = 2
Output: 12
Explanation:
    Two people stand on each side of the post. Choosing which 2 of the
    4 others face the watcher can happen in C(4, 2) = 6 ways; the
    watcher's own facing doubles that to 12.
```

### Example 3

```text
Input: n = 2, pos = 0, k = 2
Output: 0
Explanation:
    Only one other person exists, so spotting 2 people is impossible.
```

### Constraints

- `1 <= n <= 10⁵`
- `0 <= pos, k <= n - 1`

## Hints

### Hint 1

Tally the two sides separately: `a = pos` people sit to the left of the
post and `b = n - pos - 1` to the right.

### Hint 2

For a fixed split, pick which `i` of the `a` left people face the watcher
and which `k - i` of the `b` right people do; each such pick forces those
people's facings and leaves everyone else free.

### Hint 3

Sum the binomial products over all splits. Vandermonde's identity folds
the whole sum into `2 * C(n - 1, k)` — precompute factorials and inverse
factorials to evaluate it.
