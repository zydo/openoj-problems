# Counting Monotone Triples

## Description

You are given an integer array `rating` of distinct values, read left to
right as a lineup. Pick three positions `i < j < k` and look at their
values `rating[i]`, `rating[j]`, `rating[k]`. The triple is monotone when
those three values move in a single direction only — strictly rising
(`rating[i] < rating[j] < rating[k]`) or strictly falling
(`rating[i] > rating[j] > rating[k]`).

Return how many monotone triples the lineup holds. One entry may appear
in many triples; only the direction matters, not what the positions are
used for afterward.

### Example 1

```text
Input: rating = [3,6,1,5,2,4]
Output: 3
Explanation: The monotone triples are (1,2,4) rising, plus (6,5,4) and
(6,5,2) falling.
```

### Example 2

```text
Input: rating = [10,20,30]
Output: 1
Explanation: The lineup holds only one triple, and it is strictly
rising.
```

### Example 3

```text
Input: rating = [9,7,5,3]
Output: 4
```

### Example 4

```text
Input: rating = [4,12,7,18,3,15,9]
Output: 7
```

### Constraints

- `n == rating.length`
- `3 <= n <= 1000`
- `1 <= rating[i] <= 10⁵`
- All values in `rating` are distinct.

## Hints

### Hint 1

Checking every index triple works within the limits — `n` is at most 1000.

### Hint 2

To do better, put each triple on its middle index `j`. With `a` smaller
values to the left of `rating[j]` and `b` larger values to its right,
exactly `a * b` rising triples are anchored there, and the falling ones
follow from the two counts read the other way.
