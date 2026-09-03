# The Numbers That Dropped Out

## Description

You are given an array `nums` of distinct integers.

The array used to hold every integer across one whole stretch of the number
line, but since then some of those integers may have slipped out of it. The
two ends of that original stretch — its smallest and its largest integer —
are still in `nums` today.

Collect every integer from the original stretch that is no longer present
in `nums`, ordered from smallest to largest. When nothing has slipped away,
the collection is empty.

### Example 1

```text
Input: nums = [11,8,13]
Output: [9,10,12]
Explanation: The ends are 8 and 13, so the original stretch covered
8 through 13. Reading it in order, 9, 10, and 12 no longer appear.
```

### Example 2

```text
Input: nums = [3,2,1,4]
Output: []
Explanation: The ends are 1 and 4, so the stretch covered 1 through 4,
and all four integers are still accounted for — nothing is missing.
```

### Example 3

```text
Input: nums = [30,25]
Output: [26,27,28,29]
Explanation: The ends are 25 and 30, so the stretch covered 25 through
30. Only the two ends survived, leaving 26, 27, 28, and 29 to report.
```

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- All values in `nums` are unique.

## Hints

### Hint 1

Locate the smallest and largest values of the array first — together they
delimit the original stretch.

### Hint 2

Then walk every integer across that stretch, from the minimum to the
maximum, checking which ones the array still holds.

### Hint 3

Whenever an integer of the stretch fails to appear in the array, record
it. Visiting the stretch in increasing order leaves the answer sorted as
you go.
