# Largest Adjusted Pair Product

## Description

Given an integer array `nums`, choose two different indices `i` and `j`
into it. Each chosen value is first shaved down by one, and the score is
the product of the two shaved values.

Return the largest score obtainable, `(nums[i]-1)*(nums[j]-1)`.

### Example 1

```text
Input: nums = [9,2,6,7]
Output: 48
Explanation: The two largest values are 9 and 7. Shaved, they become 8
and 6, and 8*6 = 48 beats every other pair.
```

### Example 2

```text
Input: nums = [1,2]
Output: 0
Explanation: The only available pair scores (1-1)*(2-1) = 0*1 = 0.
```

### Example 3

```text
Input: nums = [4,4,4]
Output: 9
Explanation: Every element is 4, so the best pair scores (4-1)*(4-1) =
9 — the two picks must still be distinct positions.
```

### Constraints

- `2 <= nums.length <= 500`
- `1 <= nums[i] <= 10³`

## Hints

### Hint 1

Every element is at least 1, so shaving never produces a negative
factor — the biggest product always comes from the two biggest values.

### Hint 2

One scan that remembers the largest and second-largest values seen so
far is enough; a sort or a size-2 selection works just as well.
