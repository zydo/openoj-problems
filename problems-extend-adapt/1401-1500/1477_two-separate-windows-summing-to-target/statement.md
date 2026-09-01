# Two Separate Windows Summing to Target

## Description

An integer array `arr` and an integer `target` are given.

Pick two stretches of `arr` — each contiguous, each non-empty — that do
not overlap and whose sums both come to exactly `target`. Several pairs
may qualify, so among the valid pairs, take the one whose two lengths
add up to the smallest total.

Return that smallest combined length, or `-1` when no such pair exists.

### Example 1

```text
Input: arr = [1,2,3,4,5], target = 5
Output: 3
Explanation: Exactly two windows sum to 5: [2,3] and [5]. They do not
overlap, and their lengths add to 3.
```

### Example 2

```text
Input: arr = [2,2,2,2], target = 4
Output: 4
Explanation: The windows summing to 4 are the three adjacent pairs
[2,2]. Only the first and the last lie outside each other, so the best
combined length is 2 + 2 = 4.
```

### Example 3

```text
Input: arr = [5,1,2,3,6], target = 6
Output: 3
Explanation: Three windows sum to 6: [5,1], [1,2,3] and [6]. The
shortest disjoint pairing is [5,1] together with [6], totaling 3.
```

### Constraints

- `1 <= arr.length <= 10⁵`
- `1 <= arr[i] <= 1000`
- `1 <= target <= 10⁸`

## Hints

### Hint 1

Every value is positive, so a window's sum pins its shape: one sliding
sweep finds each window whose sum is `target`, with no backtracking.

### Hint 2

For every split point, pair the shortest qualifying window lying fully
to the left with the shortest one lying fully to the right; running
prefix minima of window lengths make each pairing a constant-time step.
