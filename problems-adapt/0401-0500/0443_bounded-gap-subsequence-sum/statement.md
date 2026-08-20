# Bounded Gap Subsequence Sum

## Description

You are given an integer array `nums` and an integer `k`.

Pick some positions of the array — at least one — and sum the values there.
The pick is legal only if, walking through your chosen positions from left to
right, you never jump further than `k` indices between one chosen position and
the next. Elements you skip past are simply not counted; their values do not
enter the sum.

Return the largest sum any legal pick can reach.

### Example 1

```text
Input: nums = [8,3,-9,4,15], k = 2
Output: 30
Explanation: Picking 8, 3, 4, 15 works: the gaps between their positions are
2, 2, and 1. Dropping the -9 is free, since skipping over it costs no gap.
```

### Example 2

```text
Input: nums = [4,-6,9], k = 3
Output: 13
Explanation: With k at least the array length, no jump is ever too long, so
4 and 9 can be picked while -6 is left out.
```

### Example 3

```text
Input: nums = [-4,-7,-2], k = 1
Output: -2
Explanation: At least one position must be picked, and every value is
negative, so the least bad single element wins.
```

### Constraints

- `1 <= k <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## Hints

### Hint 1

Process the array left to right, and think about picks that *end* at each
position: what is the best sum of a legal pick whose last chosen position is
`i`?

### Hint 2

Such a pick either stands alone at `i` or extends a pick ending at one of the
`k` positions before it — whichever of those has the largest value.

### Hint 3

That is a maximum over a sliding window of the previous values. A deque that
keeps candidate positions in decreasing value order answers it in constant
time per step.

### Hint 4

Negative window maxima should be treated as zero: extending from a worse
predecessor is never better than starting fresh.
