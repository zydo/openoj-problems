# Pairs With Mismatched Gaps

## Description

Given a 0-indexed integer array `nums`, examine every pair of positions
`(i, j)` with `i < j`. The pair is mismatched when its index gap differs
from its value gap — that is, when `j - i != nums[j] - nums[i]`.

Return how many mismatched pairs `nums` contains.

### Example 1

```text
Input: nums = [3,1,2,4]
Output: 5
Explanation: Only the pair (1, 2) agrees: its index gap 2 - 1 = 1
equals its value gap 2 - 1 = 1. The remaining five pairs — (0, 1),
(0, 2), (0, 3), (1, 3), and (2, 3) — all disagree, so the answer is 5.
```

### Example 2

```text
Input: nums = [5,6,7,9]
Output: 3
Explanation: The first three entries climb one step per index, so the
pairs (0, 1), (0, 2), and (1, 2) among them agree. Every pair that
reaches index 3 disagrees: stepping to 9 widens the value gap beyond the
index gap each time. The mismatched pairs are therefore (0, 3), (1, 3),
and (2, 3).
```

### Example 3

```text
Input: nums = [8,8]
Output: 1
Explanation: The only pair has index gap 1 but value gap 0, so it is
mismatched.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Count the pairs that are NOT mismatched instead — they group much more
cleanly — and subtract from the `n(n-1)/2` total.

### Hint 2

Rearranging the condition shows `j - i != nums[j] - nums[i]` holds
exactly when `nums[i] - i != nums[j] - j`.

### Hint 3

Sweep left to right with a hash map over the shifted values `nums[i] -
i`; each earlier entry with the same shifted value adds one matched
pair.
