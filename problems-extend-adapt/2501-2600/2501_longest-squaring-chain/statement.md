# Longest Squaring Chain

## Description

You are given an array of integers `nums`. Select some of its elements to
form a chain: read in increasing order, every selected value after the
first must equal the square of the value immediately before it. A valid
chain must contain at least two values, each array element may be used at
most once, and elements do not need to sit next to each other in `nums`.

Return the length of the longest chain that can be formed this way, or
`-1` if no pair of values (let alone a longer chain) squares into one
another.

### Example 1

```text
Input: nums = [3, 9, 81, 5, 25]
Output: 3
Explanation: The values 3, 9, and 81 form a chain: 9 = 3 * 3 and
81 = 9 * 9. The separate pair 5 -> 25 is shorter, so 3 is the answer.
```

### Example 2

```text
Input: nums = [256, 2, 16, 4, 10]
Output: 4
Explanation: Sorted, the chain reads 2, 4, 16, 256 — each value is the
square of the previous one. No chain can be longer.
```

### Example 3

```text
Input: nums = [6, 10, 15]
Output: -1
Explanation: No value in the array is the square of another, so there is
no chain and the answer is -1.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `2 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Since every value is at most `10⁵`, a chain cannot run for long before the
squaring overflows the bound: the deepest chain possible here has five
values.

### Hint 2

Put all values in a hash set. For each value that is a perfect square, its
chain continues whatever chain ends at its square root — if that root is
also in the set.
