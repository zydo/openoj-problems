# Weighted Random Draw

## Description

You are given a 0-indexed array of positive integers `weights`, where
`weights[i]` says how strongly index `i` should win compared with the
others.

Implement the `Solution` class:

- `Solution(int[] weights)` initializes the object with `weights`.
- `int drawIndex()` returns an index in the range
  `[0, weights.length - 1]`, and index `i` must come back with probability
  exactly `weights[i] / sum(weights)`.

For instance, if `weights = [2, 3, 5]`, the total is `10`, so `drawIndex`
should return `2` half of the time, `1` three tenths of the time, and `0`
one fifth of the time.

### Statistical judging

One draw tells the judge nothing, so correctness is measured on the
distribution rather than on single answers. Each judged `drawIndex` runs
thousands of times — up to about `300000` draws per case — and two things
must hold: every returned value is a legal index of `weights`, and the
observed share of each index stays inside a tolerance band around
`weights[i] / sum(weights)`.

Earning that much evidence per index caps the statistically judged arrays
at roughly `100` indices with reasonably balanced weights; a
maximum-length all-equal array still appears and is fully
validity-checked, with its per-index frequencies pooled.

### Example 1

```text
Input:
["Solution", "drawIndex", "drawIndex", "drawIndex"]
[[[4]], [], [], []]
Output: [null, 0, 0, 0]
Explanation: One weight means one possible winner: every draw lands on
index 0.
```

### Example 2

```text
Input:
["Solution", "drawIndex", "drawIndex", "drawIndex"]
[[[2, 3, 5]], [], [], []]
Output: [null, 2, 1, 2]
Explanation: The weights total 10, so over many draws index 2 wins about
half the time, index 1 about 3 in 10, and index 0 about 1 in 5. Any answer
sequence whose counts settle near those shares is accepted — the sequence
shown is one possible sample, not the expected output.
```

### Constraints

- `1 <= weights.length <= 10⁴`
- `1 <= weights[i] <= 10⁵`
- `drawIndex` is called at most `10⁴` times.

## Hints

### Hint 1

Place the weights side by side along a line of length `sum(weights)`, in
order: piece `i` then occupies an interval of length exactly `weights[i]`.
Dropping a uniform point on the line hits piece `i` with precisely the
probability the task asks for.

### Hint 2

The joint between two pieces sits at a prefix sum, and those joints are
already sorted — so the piece a point falls into can be found by binary
search. `O(n)` setup, then `O(log n)` per draw.

### Hint 3

Choose one inclusive/exclusive convention for the piece boundaries and use
it on both the drawing and the searching sides. A single off-by-one does
not fail loudly; it hands one unit of probability to a neighbouring index,
which the frequency check will catch.
