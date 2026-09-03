# Copies That Stay In Bounds

## Description

You are given an integer array `original` of length `n`, together with `n`
allowed ranges `bounds[i] = [ui, vi]`. Count the arrays `copy` of the same
length `n` that satisfy both of these rules:

- `copy` steps exactly like `original`: `(copy[i] - copy[i-1])` equals
  `(original[i] - original[i-1])` for every `1 <= i <= n - 1`.
- every entry stays inside its own range: `ui <= copy[i] <= vi` for every
  `0 <= i <= n - 1`.

Return how many such arrays exist.

### Example 1

```text
Input: original = [3,5,8], bounds = [[2,4],[4,6],[7,9]]
Output: 3
Explanation: The arrays are [2,4,7], [3,5,8] and [4,6,9] — each rises by
2 then 3, and each entry sits inside its range. No other first value
works.
```

### Example 2

```text
Input: original = [4,4,4], bounds = [[1,3],[2,2],[5,9]]
Output: 0
Explanation: The flat steps force all three entries of `copy` to be
equal, but no single value lies in [1,3], [2,2] and [5,9] at once.
```

### Example 3

```text
Input: original = [2,4,6], bounds = [[1,5],[3,6],[4,9]]
Output: 4
Explanation: The four arrays are [1,3,5], [2,4,6], [3,5,7] and [4,6,8];
every entry of every one of them is inside its range.
```

### Constraints

- `2 <= n == original.length <= 10⁵`
- `1 <= original[i] <= 10⁹`
- `bounds.length == n`
- `bounds[i].length == 2`
- `1 <= bounds[i][0] <= bounds[i][1] <= 10⁹`

## Hints

### Hint 1

Fixing `copy[0]` fixes the whole array: the step rule makes
`copy[i] = copy[0] + original[i] - original[0]` for every `i`.

### Hint 2

Each range `ui <= copy[i] <= vi` becomes a range restriction on
`copy[0]` once the fixed offset `original[i] - original[0]` is moved to
the other side.

### Hint 3

Intersect the first entry's range with all the translated ones; the
answer is the number of integers left, or zero if the intersection
empties out.
