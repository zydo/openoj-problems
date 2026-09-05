# The Widest Rising Triplet

## Description

Given an array `nums`, choose indices `i < j < k` whose values rise strictly
from left to right, meaning `nums[i] < nums[j] < nums[k]`. Such a choice is
scored `nums[i] - nums[j] + nums[k]`. Return the largest score that any
rising triplet can achieve.

### Example 1

```text
Input: nums = [4,2,8,5,10]
Output: 9
Explanation: The rising triplet (0, 3, 4) picks the values 4 < 5 < 10 and
scores 4 - 5 + 10 = 9. The other rising triplets score 4 - 8 + 10 = 6 and
2 - 5 + 10 = 7, so 9 is the widest.
```

### Example 2

```text
Input: nums = [10,4,7,1,9]
Output: 6
Explanation: This array admits exactly one rising triplet, (1, 2, 4),
whose values 4 < 7 < 9 give the score 4 - 7 + 9 = 6.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- The input is guaranteed to contain at least one rising triplet.

## Hints

### Hint 1

The best right-hand partner of a middle element is always the largest value
appearing after it; one sweep from the right collects that suffix maximum
for every index.

### Hint 2

Sweep from the left while remembering every value already visited. At a
middle index, the best left-hand partner is the greatest visited value that
is still strictly smaller than the middle value.

### Hint 3

That "greatest value below x" question is a predecessor query — answer it
with an ordered set of the seen values, or with a rank-compressed tree that
stores prefix maxima, so each query and insert costs one logarithmic walk.

### Hint 4

Score the middle index only when both partners exist — some smaller value
was seen before it, and the suffix maximum after it exceeds it — then keep
the best of `left - middle + right`.
