# One Rescale For The Best Stretch

## Description

You are given an integer array `nums` and a positive integer `k`.

Pick exactly one stretch of consecutive elements and rescale it, in one of
two directions:

- multiply every number in the stretch by `k`, or
- divide every number in the stretch by `k`.
    - Dividing a positive number keeps the floor of the quotient.
    - Dividing a negative number keeps the ceiling of the quotient.

Then report the largest sum of any non-empty stretch of the resulting
array.

The stretch you rescale and the stretch you score do not have to be the
same one.

### Example 1

```text
Input: nums = [2,-1,4,-6,5], k = 3
Output: 15
Explanation:
    Multiply the stretch [5] by 3, so the array becomes
    [2, -1, 4, -6, 15].
    The best stretch in the result is [15], giving 15.
```

### Example 2

```text
Input: nums = [-7,-8,-9], k = 5
Output: -1
Explanation:
    Divide the stretch [-8] by 5; the ceiling of -1.6 is -1, so the array
    becomes [-7, -1, -9].
    Every stretch is negative now, and the least bad one is [-1].
```

### Example 3

```text
Input: nums = [10,-3,-4], k = 2
Output: 20
Explanation: Doubling the stretch [10] turns the array into
[20, -3, -4], and the single value 20 is the best stretch there is.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`
- `1 <= k <= 10⁵`

## Hints

### Hint 1

A Kadane-style scan that grows the best stretch from left to right is the
right frame.

### Hint 2

Carry four states at once: the operation not started yet, currently inside
a multiplied stretch, currently inside a divided stretch, and the
operation already finished.

### Hint 3

The divided value of an element is its truncation toward zero — floor for
positives, ceiling for negatives.

### Hint 4

The answer is the largest value any state ever reaches, over every ending
position.
