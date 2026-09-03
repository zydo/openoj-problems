# The Three-Band Lineup

## Description

You are given an integer array `nums` and two integers `a` and `b` with
`a < b`.

Call `nums` lined up when its elements can be cut into three contiguous
runs, left to right, where:

- the first run holds only values below `a`,
- the second run holds only values in the closed band `[a, b]`,
- the third run holds only values above `b`.

Every run is allowed to be empty.

One move exchanges two neighboring elements. Return the fewest moves that
turn `nums` into a lined-up array. The answer can be enormous, so report it
modulo `10^9 + 7`.

### Example 1

```text
Input: nums = [2,8,4,1,9,6], a = 3, b = 7
Output: 5
Explanation:
    Grouped against the bands, the array reads low, high, mid, low, high,
    mid. Five crossings must happen: the 8 has to pass the 4, the 1, and
    the 6; the 4 has to pass the 1; and the 9 has to pass the 6. The lineup
    ends as [1, 2, 4, 6, 8, 9].
```

### Example 2

```text
Input: nums = [9,1,9,1], a = 2, b = 8
Output: 3
Explanation:
    Each 9 must end up right of each 1. Three neighboring trades suffice:
    [9,1,9,1] -> [1,9,9,1] -> [1,9,1,9] -> [1,1,9,9].
```

### Example 3

```text
Input: nums = [5], a = 2, b = 6
Output: 0
Explanation:
    A single element sits in the middle band, which is a valid lineup on
    its own.
```

### Example 4

```text
Input: nums = [4,4,1,6], a = 4, b = 4
Output: 2
Explanation:
    Both 4's must cross the 1. Two trades later the array reads
    [1, 4, 4, 6] — low run, mid run, high run.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= a < b <= 10^9`

## Hints

### Hint 1

Collapse every value to its band number: `0` below `a`, `1` inside
`[a, b]`, `2` above `b`.

### Hint 2

A lined-up array is precisely one whose band numbers read
`0...0 1...1 2...2` — a sorted band sequence.

### Hint 3

Adjacent swaps are the currency of inversions: the minimum number of trades
equals the number of out-of-order band pairs.

### Hint 4

Only three band values exist, so a single left-to-right scan with three
counters tallies every inversion without any extra data structure.
