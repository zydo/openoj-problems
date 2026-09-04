# The Longest Run That Seesaws By One

## Description

Work over a 0-indexed integer array `nums`. Call a subarray `s` of
length `m` seesawing when `m` is at least 2 and its steps rise and fall
by exactly one in strict alternation: `s[1] = s[0] + 1` to start, and
from there every step flips the direction of the one before it —
`s[2] = s[1] - 1`, `s[3] = s[2] + 1`, `s[4] = s[3] - 1`, and so on, each
step moving exactly one away from the previous value.

Return the length of the longest seesawing subarray of `nums`, or `-1`
if no subarray seesaws at all.

A subarray is a contiguous non-empty sequence of elements within an
array.

### Example 1

```text
Input: nums = [7,8,7,8,9,8,9]
Output: 4
Explanation: Two runs reach length 4: [7, 8, 7, 8] near the front, and
— once the climb to 9 breaks that pattern — [8, 9, 8, 9] again. The
longest seesaw therefore spans 4 elements.
```

### Example 2

```text
Input: nums = [3,4,5,4]
Output: 3
Explanation: [3, 4] starts a seesaw, but rising again from 4 to 5 breaks
it. The fresh pair [4, 5] then tips back into [4, 5, 4], which is 3 long.
```

### Example 3

```text
Input: nums = [9,9,9]
Output: -1
Explanation: No two neighbors ever differ, so nothing seesaws.
```

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 10⁴`

## Hints

### Hint 1

With `nums` at most 100 long, even checking every subarray against the
definition finishes instantly.

### Hint 2

A single scan also works: carry the longest seesaw that ends at the
current element, and remember that a second consecutive rise does not
leave you empty-handed — the rising pair itself is a brand-new run of
length 2.
