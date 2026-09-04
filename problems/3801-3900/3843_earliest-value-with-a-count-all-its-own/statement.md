# Earliest Value With a Count All Its Own

## Description

An array of integers `nums` is given. Read it once and count how many times
every distinct value occurs.

The answer is the value encountered earliest (leftmost occurrence) whose
occurrence count is not shared by any other value — no different integer in
the array occurs exactly as often. Values whose count is tied with some
other value's count never qualify, no matter where they sit. When every
value's count is shared with a rival, return `-1`.

### Example 1

```text
Input: nums = [8,4,4,8,5]
Output: 5
Explanation:
    8 occurs 2 times and 4 also occurs 2 times, so neither count stands
    alone and both are skipped.
    5 occurs 1 time, and nothing else occurs once, so 5 is the answer.
```

### Example 2

```text
Input: nums = [7,7,4,4,4,9]
Output: 7
Explanation:
    The counts are 7 → 2, 4 → 3, 9 → 1 — every count belongs to exactly
    one value. Several values qualify, and the leftmost one is 7.
```

### Example 3

```text
Input: nums = [30,30,60,60]
Output: -1
Explanation:
    30 and 60 each occur 2 times, so each count is shared and no value
    qualifies.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Two dictionaries are enough: one tallying occurrences per value, one
tallying how many values share each occurrence count.

### Hint 2

The first dictionary comes from a single pass over `nums`.

### Hint 3

The second is built from the first: group the per-value counts and count
how many values landed on each.

### Hint 4

Walk `nums` again from the front and answer with the first value whose
count group has size one; `-1` if the walk finds none.
