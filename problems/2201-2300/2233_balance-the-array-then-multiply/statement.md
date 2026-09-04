# Balance the Array, Then Multiply

## Description

You are given an array `nums` of non-negative integers and an integer `k`.
One operation picks any element of `nums` and raises it by 1, and you may
spend at most `k` operations.

Make the product of all the elements as large as you can under that budget,
and return the largest product modulo `10⁹ + 7`. Decide the best final
array first — the modulo only wraps the answer at the very end.

### Example 1

```text
Input: nums = [3,7], k = 4
Output: 49
Explanation: All four raises go to the 3, walking it up to 7. The array
becomes [7,7] and the product is 7 * 7 = 49.
```

### Example 2

```text
Input: nums = [2,2,2], k = 3
Output: 27
Explanation: One raise per element evens everything out at [3,3,3], whose
product 27 tops every other way of spending the three raises.
```

### Example 3

```text
Input: nums = [4,0,2], k = 6
Output: 64
Explanation: Lifting the 0 and the 2 until all three values meet at 4
yields [4,4,4] with product 64.
```

### Constraints

- `1 <= nums.length, k <= 10⁵`
- `0 <= nums[i] <= 10⁶`

## Hints

### Hint 1

With a single raise available, which element should take it?

### Hint 2

The smallest element is always the right target. Which structure surfaces
it fastest, over and over?

### Hint 3

Keep a min-heap of the values; each operation replaces the top `x` with
`x + 1`.
