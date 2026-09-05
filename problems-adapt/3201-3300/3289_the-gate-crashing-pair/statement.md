# The Gate-Crashing Pair

## Description

A guest list `nums` was drawn up for a party of `n` numbered invitees,
holding each value from `0` to `n - 1` exactly once. Somehow two values
managed to get themselves written onto the list a second time, so `nums`
now holds `n + 2` entries and exactly two values appear twice each.

Track down the two values that slipped through. Return them as an array of
size two, sorted in ascending order — the judge compares the array exactly.

### Example 1

```text
Input: nums = [3,0,2,3,1,0]
Output: [0,3]
Explanation: With four invitees the list should hold 0 through 3 once
each, but 0 and 3 both show up twice.
```

### Example 2

```text
Input: nums = [5,2,4,5,0,1,4,3]
Output: [4,5]
Explanation: The entries for 4 and 5 were each written down twice.
```

### Example 3

```text
Input: nums = [4,7,2,7,0,5,8,2,1,6,3]
Output: [2,7]
Explanation: Every value from 0 to 8 appears except that 2 and 7 appear
twice.
```

### Constraints

- `2 <= n <= 100`
- `nums.length == n + 2`
- `0 <= nums[i] < n`
- `nums` contains exactly two values that each appear twice; every other
  value appears once.

## Hints

### Hint 1

Counting works even without a hash map: since every value lies below `n`,
a plain array of `n` counters indexed by value does the job.

### Hint 2

Alternatively, think about how the running total of the entries compares
with the total of a complete guest list, and how the sum of squares
differs — two equations in the two unknowns.
