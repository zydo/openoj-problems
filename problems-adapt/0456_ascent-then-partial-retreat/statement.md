# Ascent Then Partial Retreat

## Description

You are given an integer array `nums`. An **ascent-retreat** is a triple of
positions `i < j < k` whose values climb and then partly fall back:

`nums[i] < nums[k] < nums[j]`

— a value is overtaken by a later larger one, and a still later value slips
below that peak yet stays above the starting value.

Return `true` if `nums` contains such a triple, and `false` otherwise.

### Example 1

```text
Input: nums = [2,4,7,9]
Output: false
Explanation: The values only climb, so nothing ever retreats below a peak.
```

### Example 2

```text
Input: nums = [4,1,6,3]
Output: true
Explanation: 1 is overtaken by 6, and 3 comes back down below 6 while
staying above 1: 1 < 3 < 6.
```

### Example 3

```text
Input: nums = [-2,5,3,0]
Output: true
Explanation: Three triples qualify: [-2,5,3], [-2,5,0], and [-2,3,0] —
only one is needed. Values may be negative.
```

### Constraints

- `1 <= nums.length <= 2 * 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Hints

### Hint 1

Read the array from the right. At each position, ask: does everything needed
to finish a triple already sit to the right of it, ready to serve as its
first element?

### Hint 2

What you want from the right side is a value with a larger value before it —
and among those, the biggest one is the most useful middle element, because
it is the easiest to stay above while sitting below some peak.

### Hint 3

A stack that decreases from bottom to top hands you exactly that: when the
incoming value tops the stack, everything it pops is smaller and lies to its
right, so the largest popped value is a certified candidate. Compare the
incoming value against the best candidate before pushing it.
