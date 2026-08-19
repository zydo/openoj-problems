# Split Into Runs of k Consecutive Values

## Description

You are given an array of integers `nums` and a positive integer `k`.

Decide whether `nums` can be split entirely into groups of size `k`, where
each group consists of `k` consecutive integers — for `k = 3`, a group like
`{5, 6, 7}`. Every element must be used exactly once.

Return `true` when such a split exists and `false` otherwise.

### Example 1

```text
Input: nums = [4,5,6,5,6,7,6,7,8], k = 3
Output: true
Explanation: The groups are {4,5,6}, {5,6,7}, and {6,7,8} — three runs that
overlap in the middle.
```

### Example 2

```text
Input: nums = [10,12,11,14,13], k = 5
Output: true
Explanation: The values 10 through 14 form one run of five; the input's
jumbled order does not matter.
```

### Example 3

```text
Input: nums = [8,8,9,10], k = 3
Output: false
Explanation: Both 8s would have to open a run, which needs two 9s — the
array has only one.
```

### Constraints

- `1 <= k <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Look at the smallest value still waiting to be grouped. Whichever group
takes it has no freedom at all — which `k` values must that group contain?

### Hint 2

If `v` is that smallest value and it has `c` copies, then `c` groups must
start at `v`, each consuming one copy of every value up to `v + k - 1`. Peel
those groups off and repeat with the new smallest remaining value.

### Hint 3

The moment one of those values above `v` cannot supply `c` copies, no split
exists — the forced moves you already made cannot be undone.
