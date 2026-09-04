# Count Smaller Values Per Position

## Description

For each position in an array of integers, count how many other positions
hold a strictly smaller value — duplicates count only once per position,
so an equal value never contributes.

Implement the `RankTally` class:

- `RankTally()` initializes the tally.
- `int[] smallerCounts(int[] nums)` returns an array `answer` of the same
  length as `nums`, where `answer[i]` is the number of indices `j` with
  `nums[j] < nums[i]`.

### Example 1

```text
Input: nums = [7,4,6,1]
Output: [3,1,2,0]
Explanation: Three values — 1, 4, and 6 — are smaller than 7; 4
has just 1 below it; 6 has 4 and 1; nothing is smaller than 1.
```

### Example 2

```text
Input: nums = [5,5,1]
Output: [1,1,0]
Explanation: The two 5s each see only the 1 as strictly smaller — an
equal 5 does not count — and nothing is smaller than the 1.
```

### Example 3

```text
Input: nums = [1]
Output: [0]
```

### Constraints

- `2 <= nums.length <= 500`
- `0 <= nums[i] <= 100`

## Hints

### Hint 1

Values are capped at 100 — a histogram of occurrences plus a running
total answers every position in one sweep.

### Hint 2

The count of strictly smaller values for `v` is exactly the number of
elements with value at most `v - 1`.
