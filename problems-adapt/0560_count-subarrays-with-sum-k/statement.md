# Count Subarrays With Sum K

## Description

You are handed an integer array `nums` and an integer `k`. A *slice* is any
non-empty run of adjacent entries. Report how many distinct slices — counted by
their position, not by their contents — add up to exactly `k`.

Entries may be negative or zero, and so may `k`.

### Example 1

```text
Input: nums = [3,-1,1,3,2], k = 3
Output: 4
Explanation: The slices at positions [0,0], [0,2], [1,3] and [3,3] each total 3.
```

### Example 2

```text
Input: nums = [2,2,2,2], k = 4
Output: 3
Explanation: Every adjacent pair works, and nothing else does.
```

### Example 3

```text
Input: nums = [0,0,5], k = 0
Output: 3
Explanation: Two single zeros and the pair of them. Slices with a total of zero
are counted like any other.
```

### Constraints

- `nums` holds at least one and at most `2 * 10^4` entries
- every entry lies in `[-1000, 1000]`
- `-10^7 <= k <= 10^7`

## Hints

### Hint 1

Write `P[j]` for the total of the first `j` entries. Any slice's total is a
difference of two of these, which turns the question into: how many pairs of
prefix totals differ by `k`?

### Hint 2

Sweep left to right holding the current prefix total. A slice ending here works
when some earlier prefix total equals `current - k`, so keep a frequency table
of the prefix totals seen so far and add its count for that key.

### Hint 3

The prefix total before the first entry is `0`, and it is a legitimate partner —
put it in the table before the sweep starts, or slices anchored at the front go
uncounted.

### Hint 4

Record the current prefix total only after you have read off its count.
Recording first would let a slice pair with itself, and only when `k` is `0`,
which makes the bug easy to miss.

### Hint 5

Negative entries mean the prefix totals do not increase, so no two-pointer
window applies here. Equality lookups in the table do not care about ordering,
which is exactly why they still work.
