# Steps to a Divisible Sum

## Description

You are given an integer array `nums` and an integer `k`. One operation
picks any single element and lowers it by exactly 1.

Return the fewest operations after which the sum of all elements is
divisible by `k`.

### Example 1

```text
Input: nums = [8,6,3], k = 7
Output: 3
Explanation:
The sum is 17. Three decrements bring the total to 14, which is
divisible by 7 — for instance nums = [5,6,3]. Two operations are not
enough, since 15 leaves remainder 1.
```

### Example 2

```text
Input: nums = [5,5], k = 10
Output: 0
Explanation:
The sum is 10, already a multiple of 10.
```

### Example 3

```text
Input: nums = [2], k = 9
Output: 2
Explanation:
Lowering the single element to 0 takes two operations, and the sum 0 is
divisible by 9.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- `1 <= k <= 100`

## Hints

### Hint 1

Each operation lowers the total by exactly 1, so only the total matters —
the individual elements just guarantee you can always go all the way down
to 0.

### Hint 2

The answer is the distance from the current total down to the nearest
multiple of `k` at or below it.
