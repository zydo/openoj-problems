# Maximum Subset Product

## Description

Pick any non-empty subset of the elements of an integer array `nums` and
multiply the chosen values together. Repeated values at different positions
count separately, and the order of multiplication is irrelevant. Return the
largest product that some non-empty subset of `nums` can reach.

### Example 1

```text
Input: nums = [2,3,-2,4]
Output: 24
Explanation: Choosing 2, 3, and 4 gives the product 2 * 3 * 4 = 24. The
negative -2 would only cancel sign parity, so it stays out.
```

### Example 2

```text
Input: nums = [-7]
Output: -7
Explanation: The array holds a single element, so the only possible subset
is the whole array and the answer is -7 even though it is negative.
```

### Example 3

```text
Input: nums = [-5,-4,0,3]
Output: 60
Explanation: The pair -5 and -4 multiplies to a positive 20, and taking 3
alongside them lifts the product to 60. A zero would flatten everything, so
it is left behind.
```

### Constraints

- `1 <= nums.length <= 13`
- `-9 <= nums[i] <= 9`

## Hints

### Hint 1

With at most 13 elements you can afford to look at every subset and simply
take the best product you find.

### Hint 2

A sorting shortcut exists: after sorting, take every positive element.

### Hint 3

Negatives only help in pairs — and when their count is odd, dropping the
negative closest to zero costs the least.
