# Mode Score of Every Window

## Description

You are given an integer array `nums` and an integer `k`.

Slide a window of length `k` across `nums`, and give every window a score
built from two parts:

- Its **mode**: the value with the highest frequency in the window; if
  several values share that frequency, the smallest of them wins.
- Its **score**: that mode times the number of times it appears in the
  window.

Sum the scores of all length-`k` windows and return the total. It always
fits in a 64-bit integer.

### Example 1

```text
Input: nums = [3,1,3,1,3], k = 3
Output: 14
Explanation: The windows are [3,1,3], [1,3,1] and [3,1,3]. The first and
third both hold two 3s, scoring 3 * 2 = 6 each; the middle one holds two
1s, scoring 1 * 2 = 2. The total is 6 + 2 + 6 = 14.
```

### Example 2

```text
Input: nums = [5,5,4,4], k = 2
Output: 22
Explanation: [5,5] scores 5 * 2 = 10, and [4,4] scores 4 * 2 = 8. In
[5,4] both values appear once, so the tie goes to the smaller 4 and the
window scores 4. The total is 10 + 4 + 8 = 22.
```

### Example 3

```text
Input: nums = [7,7,7,7], k = 4
Output: 28
Explanation: The single window holds 7 four times, so it scores
7 * 4 = 28.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= k <= nums.length`

## Hints

### Hint 1

The windows overlap heavily, so reuse work: move a fixed-size window one
step at a time instead of recounting each one from scratch.

### Hint 2

Track how often the current window's values occur, and keep the largest
frequency up to date as elements enter and leave — both updates are
constant time if frequencies are indexed directly.

### Hint 3

For the mode itself, also group values by their frequency, so the
smallest value sitting at the top frequency can be read off without
looking at the whole window again.
