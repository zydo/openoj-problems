# The Heaviest Distinct Trio

## Description

Two integer arrays `x` and `y`, both of length `n`, describe `n` items:
item `i` carries label `x[i]` and score `y[i]`. Pick three indices `i`,
`j`, and `k` whose labels are pairwise different — `x[i] != x[j]`,
`x[j] != x[k]`, and `x[k] != x[i]` — making the combined score
`y[i] + y[j] + y[k]` as large as you can.

Return that largest combined score, or `-1` if no three pairwise
differently-labeled items exist.

### Example 1

```text
Input: x = [4,7,4,7,9], y = [10,2,8,6,5]
Output: 21
Explanation:
Each of the labels 4, 7, and 9 sends its best score: 10 for label 4,
6 for label 7, and 5 for label 9. Together 10 + 6 + 5 = 21, and no
legal trio scores more.
```

### Example 2

```text
Input: x = [5,2,8,2], y = [1,4,3,9]
Output: 13
Explanation:
Label 2 appears twice but can send only one representative — the 9
beats the 4. The trio takes 9 (label 2), 3 (label 8), and 1 (label 5),
scoring 13.
```

### Example 3

```text
Input: x = [3,3,3], y = [9,8,7]
Output: -1
Explanation:
Every item shares a single label, so three pairwise different labels
can never be gathered.
```

### Constraints

- `n == x.length == y.length`
- `3 <= n <= 10⁵`
- `1 <= x[i], y[i] <= 10⁶`

## Hints

### Hint 1

A label contributes at most one item to the trio, so only its best score
matters — every other item sharing that label can be discarded outright.

### Hint 2

Collapse the pairs into a single best score per label, then add up the
three biggest collapsed scores.

### Hint 3

Fewer than three distinct labels means no legal trio exists; answer
`-1` without searching further.
