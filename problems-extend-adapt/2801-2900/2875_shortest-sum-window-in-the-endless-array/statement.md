# Shortest Sum Window In The Endless Array

## Description

You are given a 0-indexed array `nums` and an integer `target`.

Picture an endless array `infinite_nums` built by writing `nums` over
and over, back to back, forever.

Find the shortest stretch of consecutive entries of `infinite_nums`
whose values add up to exactly `target`, and return that stretch's
length. If no stretch ever sums to `target`, return `-1`.

### Example 1

```text
Input: nums = [4,7,2,9], target = 11
Output: 2
Explanation: Here infinite_nums = [4,7,2,9,4,7,2,9,...]. The stretch
[4,7] sums to 11 with length 2, and no single entry equals 11, so 2 is
the shortest possible.
```

### Example 2

```text
Input: nums = [1,6,2,3], target = 18
Output: 5
Explanation: Here infinite_nums =
[1,6,2,3,1,6,2,3,...]. The stretch [6,2,3,1,6] — running from the
second entry of the first copy into the second copy — sums to
6 + 2 + 3 + 1 + 6 = 18 with length 5, and no shorter stretch reaches
18.
```

### Example 3

```text
Input: nums = [5,10,5], target = 40
Output: 6
Explanation: One copy sums to 20, so two full copies sum to 40 and
span 6 entries. No shorter arrangement of consecutive entries
reaches 40.
```

### Example 4

```text
Input: nums = [2,4,6], target = 5
Output: -1
Explanation: Every entry of infinite_nums is even, so no stretch can
ever sum to the odd number 5.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= target <= 10⁹`

## Hints

### Hint 1

Any stretch of exactly `len(nums)` consecutive entries sums to the
same value — one full copy — so `target` splits into some number of
whole copies plus a remainder below that copy's sum.

### Hint 2

A remainder is always hit by a stretch shorter than one copy, and two
back-to-back copies contain every such stretch for every starting
phase; with strictly growing prefix sums, a first-occurrence map finds
the unique stretch of the remainder ending at each position.
