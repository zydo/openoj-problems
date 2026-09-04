# Indices Within Reach Of The Key

## Description

You are given a 0-indexed integer array `nums` together with two integers
`key` and `k`. An index `i` of `nums` is within reach of the key when
some index `j` satisfies both `|i - j| <= k` and `nums[j] == key` — that
is, `i` lies at distance `k` or less from at least one spot where the
array holds the value `key`.

Return every within-reach index in increasing order.

### Example 1

```text
Input: nums = [9,1,1,1,9,1], key = 9, k = 1
Output: [0,1,3,4,5]
Explanation: The value 9 sits at indices 0 and 4. Distance 1 reaches
index 0 and its neighbor 1 on the left occurrence, and indices 3, 4 and
5 on the right one. Index 2 is two steps away from both 9s, so it is the
only index left out.
```

### Example 2

```text
Input: nums = [6,6,1,6], key = 6, k = 3
Output: [0,1,2,3]
Explanation: The value 6 appears at indices 0, 1 and 3, and radius 3
covers the whole array, so every index qualifies.
```

### Example 3

```text
Input: nums = [8], key = 8, k = 1
Output: [0]
Explanation: The lone entry equals the key, so its own index is the
answer.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- `key` occurs somewhere in `nums`.
- `1 <= k <= nums.length`

## Hints

### Hint 1

Each occurrence of `key` — say it sits at index `j` — claims exactly the
band of indices from `j - k` to `j + k`, clipped to the array's ends.
Collect what all the bands cover.

### Hint 2

The bands belong to occurrences scanned left to right, so they arrive
already sorted by their starting points; one pointer to the first index
not yet emitted lets each band contribute only its fresh part, with no
set or final sort required.
