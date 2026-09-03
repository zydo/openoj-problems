# Richest Window After K Trades

## Description

An integer array `nums` and an integer `k` are given.

You may perform at most `k` trades on the array before choosing anything
else. One trade picks two indices `i` and `j` and exchanges the values
`nums[i]` and `nums[j]`.

After the trades are done, pick one contiguous, non-empty stretch of the
array. Return the largest total such a stretch can reach.

### Example 1

```text
Input: nums = [2,-6,7,1], k = 1
Output: 10
Explanation:
    The stretch [-6,7,1] sums to 2. Trading the -6 inside it for the 2
    sitting just to its left reshapes the array to [-6,2,7,1], and the
    stretch [2,7,1] now sums to 10. One trade is enough; no single
    stretch reaches more.
```

### Example 2

```text
Input: nums = [5,-4,-3,8], k = 1
Output: 13
Explanation:
    The stretch [-3,8] sums to 5. Trading the -3 inside it for the 5
    parked before the -4 gives the array [-3,-4,5,8], whose stretch
    [5,8] sums to 13.
```

### Example 3

```text
Input: nums = [-9,-4,-6], k = 0
Output: -4
Explanation:
    No trades are allowed, so every value keeps its place. All three
    stretch totals are negative, and the lone cell -4 loses the least.
```

### Example 4

```text
Input: nums = [9,1,-8,4,6], k = 2
Output: 20
Explanation:
    The stretch [1,-8,4,6] sums to 3. Trading the -8 inside it for the
    9 at the front yields [1,9,4,6], worth 20. A second trade can only
    lower that figure, so 20 is the answer.
```

### Constraints

- `1 <= nums.length <= 1500`
- `-10^5 <= nums[i] <= 10^5`
- `0 <= k <= nums.length`

### Hint 1

Nail down one stretch first. A trade helps only when it hands one of the
stretch's cheapest members to a larger value resting outside the stretch.

### Hint 2

Line the inside values up from smallest to largest and the outside values
from largest to smallest. Using t trades then gains exactly the sum of the
t biggest outside values minus the sum of the t smallest inside ones, and
each successive pair must still be an improvement.

### Hint 3

Walk the left end across the array and grow the right end one cell at a
time, keeping the inside and outside multisets in an order-statistics
structure that can report counts, totals, and the sum of the smallest or
largest t members on demand.

### Hint 4

Each additional trade buys a non-increasing gain, so stop as soon as the
next outside candidate fails to beat the next inside one, and credit the
accumulated gain to the stretch's untouched total.
