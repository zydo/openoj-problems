# The Top-Scoring Ring Split

## Description

You are given a cyclic integer array `nums` and an integer `k`.

Cut `nums` into at most `k` pieces. Each piece is a cyclically contiguous
run of values, so a piece may run off the end of the array and continue
from its beginning.

A piece is rated by its range: the gap between the largest and the
smallest value it holds. The score of a cut is the sum of the ranges of
all its pieces.

Return the greatest score any cut into at most `k` pieces can reach.
Spending fewer than `k` pieces is allowed.

### Example 1

```text
Input: nums = [4,9,1,6], k = 2
Output: 10
Explanation: Cut nums into the wrapped piece [6,4], which runs from the
last cell back around to the first, plus the piece [9,1]. Their ranges
are 6 - 4 = 2 and 9 - 1 = 8, and 2 + 8 = 10.
```

### Example 2

```text
Input: nums = [2,10,3,10,4], k = 2
Output: 15
Explanation: Cut nums into [2,10] and [3,10,4], whose ranges are
10 - 2 = 8 and 10 - 3 = 7; the cut scores 8 + 7 = 15.
```

### Example 3

```text
Input: nums = [7,1,8,2,9], k = 1
Output: 8
Explanation: With a single piece allowed, the only cut leaves the whole
ring intact, and its range is 9 - 1 = 8.
```

### Example 4

```text
Input: nums = [5,5,5,5], k = 3
Output: 0
Explanation: Every piece of this array holds equal values, so each range
is 0 no matter how the cuts are placed; spare pieces go to waste.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= nums.length`

## Hints

### Hint 1

Rate each piece by the two values that matter: its maximum and its
minimum. A cut into at most `k` pieces therefore places at most `2k`
marks on the ring.

### Hint 2

Marking an element as a maximum credits `nums[i]`; marking it as a
minimum debits `nums[i]`. Every mark must be paired with exactly one
opposite mark beside it on the ring, and one such pair is one piece's
range.

### Hint 3

Sweep the array once while remembering how many pairs have closed and
which marks still wait for a partner; the seam is handled by allowing
one pair to stay open across it and close at the end.
