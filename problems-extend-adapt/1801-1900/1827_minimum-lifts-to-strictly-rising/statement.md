# Minimum Lifts to a Strictly Rising Array

## Description

An array is strictly rising when every element is larger than the one
before it. You are given an integer array `nums`, and one move lets you
pick any element and raise it by one.

Return the fewest moves needed to make `nums` strictly rising. An array of
length one is already strictly rising.

### Example 1

```text
Input: nums = [3,2,1,1]
Output: 11
Explanation: The cheapest strictly rising target is [3,4,5,6]: the second
element takes 2 raises, the third takes 4, and the last takes 5, for
2 + 4 + 5 = 11 in total.
```

### Example 2

```text
Input: nums = [1,3,2,5]
Output: 2
Explanation: Only the third element sits below its left neighbor; raising
it from 2 to 4 turns the array into [1,3,4,5].
```

### Example 3

```text
Input: nums = [7]
Output: 0
Explanation: A single element needs no work.
```

### Constraints

- `1 <= nums.length <= 5000`
- `1 <= nums[i] <= 10⁴`

## Hints

### Hint 1

Elements never have to come down, so each position has a floor: one more
than the final value of the element to its left.

### Hint 2

Sweep left to right, lifting each element to `max(previous + 1, current)`
and charging the difference; the charges sum to the answer.
