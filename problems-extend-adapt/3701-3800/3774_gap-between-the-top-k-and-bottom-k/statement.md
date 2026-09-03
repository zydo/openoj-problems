# Gap Between the Top k and Bottom k

## Description

You are handed an integer array `nums` and an integer `k`. Form two groups
from the array: the `k` largest values it contains, and the `k` smallest
values it contains. Add the values in each group to get two sums.

Return how far apart those sums are — the absolute value of their
difference.

### Example 1

```text
Input: nums = [8,1,6,3,9], k = 2
Output: 13
Explanation: The two largest values are 9 and 8, which sum to 17. The two
smallest values are 1 and 3, which sum to 4. The gap between the sums is
17 - 4 = 13.
```

### Example 2

```text
Input: nums = [4], k = 1
Output: 0
Explanation: The lone element is simultaneously the largest and the
smallest, so both sums equal 4 and the gap is 0.
```

### Example 3

```text
Input: nums = [2,7,2,7], k = 3
Output: 5
Explanation: The three largest values are 7, 7, and one of the 2's,
summing to 16. The three smallest are 2, 2, and one of the 7's, summing to
11. The gap is 16 - 11 = 5.
```

### Constraints

- `1 <= n == nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= k <= n`

## Hints

### Hint 1

After sorting a copy of the array, the `k` smallest values occupy the front
and the `k` largest the back, so both sums come off the same sorted order.
