# Total Subarray Spread

## Description

You are given an integer array `nums`. A subarray is a contiguous, non-empty
run of elements from the array. The **spread** of a subarray is the distance
between its largest and smallest elements.

Add up the spreads of every subarray of `nums` and return the total.

### Example 1

```text
Input: nums = [4,2,5]
Output: 8
Explanation: The subarrays of length at least 2 contribute:
[4,2] has spread 4 - 2 = 2
[2,5] has spread 5 - 2 = 3
[4,2,5] has spread 5 - 2 = 3
Single-element subarrays contribute 0, so the total is 2 + 3 + 3 = 8.
```

### Example 2

```text
Input: nums = [6,6,2]
Output: 8
Explanation: [6,6] has spread 0 — equal values sit at both ends. [6,2]
and [6,6,2] each have spread 4. The total is 0 + 4 + 4 = 8.
```

### Example 3

```text
Input: nums = [1,-2,4]
Output: 15
Explanation: [1,-2] spreads 3, [-2,4] spreads 6, [1,-2,4] spreads 6.
The total is 3 + 6 + 6 = 15.
```

### Constraints

- `1 <= nums.length <= 1000`
- `-10⁹ <= nums[i] <= 10⁹`

### Follow-up

The double loop is quadratic. Can the total be reached in a single
left-to-right pass per element, in `O(n)` overall?

## Hints

### Hint 1

Grow a subarray one element at a time. What is the cheapest way to know the
new maximum and minimum, given the old ones?

### Hint 2

Fix the left endpoint and sweep the right endpoint forward, carrying the
running extremes and adding their difference at each step.

### Hint 3

For the linear follow-up: each element acts as the maximum for some family
of subarrays and the minimum for another. Monotonic stacks can count both
families' sizes for every element at once.
