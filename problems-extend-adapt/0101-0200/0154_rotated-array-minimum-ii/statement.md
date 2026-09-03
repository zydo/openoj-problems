# Rotated Array Minimum II

## Description

Take `n` integers arranged in increasing order — with duplicates
allowed this time — then move some number of entries, at least `1` and
at most `n`, from the back of the array to the front, keeping their
relative order. Moving all `n` leaves the array exactly as it started.
The result of that operation is the array `nums` you are given.

Return the smallest value in `nums`. Keep the number of steps as low as
the data allows: never examine an entry you cannot need.

### Example 1

```text
Input: nums = [6,7,8,2,4,4,5]
Output: 2
Explanation: The increasing arrangement was [2,4,4,5,6,7,8], with its
last three entries brought to the front.
```

### Example 2

```text
Input: nums = [2,2,2,1,2]
Output: 1
Explanation: The run of equal 2s straddles the rotation point, so the
smallest value does not announce itself from either end.
```

### Example 3

```text
Input: nums = [7,7,7,7]
Output: 7
Explanation: Every entry holds the same value, so any one of them is
the minimum.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- `nums` is an increasing array with `1` to `n` of its trailing entries
  moved to the front; values may repeat.

### Follow-up

When every value is distinct, each comparison rules out half of the
remaining window. What breaks once equal values are allowed, and what
does that do to the running time?
