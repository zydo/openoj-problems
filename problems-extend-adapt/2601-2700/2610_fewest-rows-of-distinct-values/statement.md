# Fewest Rows of Distinct Values

## Description

Given an integer array `nums`, spread every element into a 2D array that
meets three requirements:

- The only values that appear are the ones taken from `nums`.
- No value repeats within a single row.
- The total number of rows is as small as possible.

Return the 2D array. Several arrangements may satisfy the requirements; any
of them is accepted.

Rows are allowed to hold different amounts of elements.

### Example 1

```text
Input: nums = [3,1,3,2,3,1]
Output: [[3,1,2],[3,1],[3]]
Explanation: The value 3 shows up three times, so each copy claims its own
row, while the single 1s and 2 slot into earlier rows without colliding
with anything already there.
```

### Example 2

```text
Input: nums = [2,2,2,3,3]
Output: [[2,3],[2,3],[2]]
Explanation: Both 2 and 3 occur three times at most, so three rows are
needed, and pairing the copies keeps every row free of repeats.
```

### Example 3

```text
Input: nums = [4,4,4,4]
Output: [[4],[4],[4],[4]]
Explanation: One value repeated four times forces four one-element rows,
since a row can never contain it twice.
```

### Constraints

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= nums.length`

## Hints

### Hint 1

Count how often the most frequent value occurs. That count is a hard floor
on the row total — its copies all need separate rows — and it is also
achievable, so it is the answer.

### Hint 2

Sweep through the array once. Hand each value's first copy to row 0, its
second copy to row 1, and so on; rows then never collide and open only when
some value outgrows the ones seen so far.
