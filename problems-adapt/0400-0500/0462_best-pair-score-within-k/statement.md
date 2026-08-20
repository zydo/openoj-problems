# Best Pair Score Within k

## Description

You are given an array `points` of planar coordinates, ordered so that the
x-values strictly increase: `points[i] = [x, y]` with `x` smaller than
every later entry. You are also given an integer `k`.

The score of a pair of entries `i < j` is `y[i] + y[j] + |x[i] - x[j]|`,
and a pair is legal only when `|x[i] - x[j]| <= k`.

Return the highest score over all legal pairs. At least one legal pair is
guaranteed to exist.

### Example 1

```text
Input: points = [[0,4],[2,1],[3,7],[6,2]], k = 2
Output: 9
Explanation: Legal pairs are the first two (4 + 1 + 2 = 7) and the middle
two (1 + 7 + 1 = 9). The pair [3,7] and [6,2] sits 3 apart in x, past the
bound, so it scores nothing even though its y-values look promising.
```

### Example 2

```text
Input: points = [[0,-5],[4,0],[7,-5]], k = 4
Output: -1
Explanation: The first two entries sit exactly 4 apart and score
-5 + 0 + 4 = -1; the last two score -2. When every y is negative the
distance term is all you can recover — the best score can be negative.
```

### Example 3

```text
Input: points = [[0,2],[1,2],[2,2]], k = 5
Output: 6
Explanation: All three pairs are legal and all y-values tie, so the widest
legal pair wins: [0,2] with [2,2] scores 2 + 2 + 2 = 6.
```

### Constraints

- `2 <= points.length <= 100,000`
- `points[i].length == 2`
- `-100,000,000 <= x, y <= 100,000,000`
- `0 <= k <= 200,000,000`
- the x-values strictly increase

## Hints

### Hint 1

With the entries ordered by x, the absolute value in a pair `i < j` always
resolves to `x[j] - x[i]`. Group the score as `(y[j] + x[j]) + (y[i] - x[i])`:
for a fixed right-hand entry `j`, only the second bracket changes with the
partner.

### Hint 2

So the partner worth taking from the window `x[j] - k <= x[i]` is the one
maximizing `y - x`, and that window only ever slides to the right.

### Hint 3

Hold candidate indices in a deque whose `y - x` values decrease from front
to back. Evict the front the moment it drifts more than `k` behind the
current x; evict from the back any candidate whose key the newcomer
matches or beats. Each index enters once and leaves at most once.
