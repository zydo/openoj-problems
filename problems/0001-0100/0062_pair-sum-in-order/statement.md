# Pair Sum In Order

## Description

You are given an integer array `nums` whose values never decrease from left to
right, together with an integer `target`. Locate the two positions whose values
sum to `target`, and report those positions **counting from one**.

A position cannot be paired with itself, and the input is guaranteed to admit
**exactly one** such pair. Report the smaller position first.

Your working memory must not grow with the length of `nums`.

### Example 1

```text
Input: nums = [3,8,12,19], target = 20
Output: [2,3]
Explanation: 8 is the second value and 12 the third, and 8 + 12 is 20.
```

### Example 2

```text
Input: nums = [-13,-6,5,9,17], target = 3
Output: [2,4]
Explanation: -6 + 9 is 3. Values may be negative, as long as they ascend.
```

### Example 3

```text
Input: nums = [4,4,7,7,7], target = 8
Output: [1,2]
Explanation: The two fours occupy different positions, so pairing them is legal.
```

### Constraints

- `2 <= nums.length <= 3 * 10⁴`
- `-1000 <= nums[i] <= 1000`
- `-1000 <= target <= 1000`
- `nums[i] <= nums[i + 1]` for every valid `i`.
- The pair is unique.

## Hints

### Hint 1

The unsorted version of this task buys speed with a hash map. Here you are
denied that memory, so the ordering has to pay for the search instead.

### Hint 2

Consider the pair made of the very first and the very last value. If their sum
misses the target, one of the two can be ruled out of *every* pair — work out
which one, and in which direction the miss points.

### Hint 3

Ruling out one endpoint per comparison shrinks the range by one each time, so
a single traversal with two converging markers settles the whole array.
