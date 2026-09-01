# Largest Shared Divisor

## Description

You are given an integer array `nums`. Take its smallest entry and its
largest entry, and return their greatest common divisor — the largest
positive integer that divides both of them.

### Example 1

```text
Input: nums = [12,4,18,30,5]
Output: 2
Explanation: The smallest entry is 4 and the largest is 30; the largest
positive integer dividing both is 2.
```

### Example 2

```text
Input: nums = [9,27,81,15]
Output: 9
Explanation: The smallest entry is 9 and the largest is 81, and 9
divides both of them.
```

### Example 3

```text
Input: nums = [6,35]
Output: 1
Explanation: The two entries 6 and 35 share no positive divisor other
than 1.
```

### Constraints

- `2 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

Only the two extremes matter. Sweep the array once, tracking the
smallest and largest values seen so far.

### Hint 2

One option is to test candidates from the smaller extreme downward and
stop at the first that divides both — values here cap at 1000, so that
sweep stays short.
