# The Tightest OR Window II

## Description

You are given an array `nums` of non-negative integers and an integer `k`.

Call a subarray of `nums` strong when the bitwise OR of all of its
elements is at least `k`. The OR of a group of numbers combines every bit
that any one of them carries.

Find the shortest strong subarray — the one with the fewest elements
whose OR still reaches `k` — and return its length. If `nums` contains no
strong subarray at all, return -1.

### Example 1

```text
Input: nums = [4,1], k = 4
Output: 1
Explanation: The single-element subarray [4] has OR value 4, which
already meets the bar, so the answer is 1.
```

### Example 2

```text
Input: nums = [2,3,4], k = 6
Output: 2
Explanation: No lone element is strong enough: 2, 3, and 4 all fall below
6. The adjacent pair [3,4] ORs to 7, which clears the bar, and no shorter
subarray can, so the answer is 2.
```

### Example 3

```text
Input: nums = [1,2,3], k = 10
Output: -1
Explanation: The widest possible OR, taken over the entire array, is only
3. Every subarray of nums stays below 10, so no strong subarray exists.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁵`
- `0 <= nums[i] <= 10⁹`
- `0 <= k <= 10⁹`

## Hints

### Hint 1

For a fixed right endpoint, watch how the OR of subarrays ending there
changes as the left endpoint slides; each new element joining the window
can only switch bits on, never off.

### Hint 2

Since OR never drops a bit, a left endpoint that works for some right
endpoint keeps working for every later one: growing the window rightward
only adds bits. The best left end therefore only ever moves forward, which
is exactly what a two-pointer sweep needs.

### Hint 3

OR cannot be undone element by element, so instead of a running value keep
one counter per bit position — how many elements currently in the window
set that bit. Sliding either end adjusts a few counters, and the window's
live OR is rebuilt from whichever counters are still positive.
