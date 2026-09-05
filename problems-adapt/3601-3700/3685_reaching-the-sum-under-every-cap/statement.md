# Reaching The Sum Under Every Cap

## Description

You are given an integer array `nums` of length `n` and a positive integer
`k`.

For a value `x`, the array **clipped at `x`** keeps every element that is
already at most `x` unchanged and lowers each larger element to exactly
`x`. In other words, element `i` turns into `min(nums[i], x)`.

Ask the same question for every clip level `x = 1, 2, ..., n`: can some
subsequence of the array clipped at `x` have a sum of exactly `k`? Return a
0-indexed boolean array `answer` of length `n` where `answer[i]` records the
answer for `x = i + 1`.

### Example 1

```text
Input: nums = [2,1,1,3], k = 4
Output: [true,true,true,true]
Explanation:
For x = 1 the clipped array is [1,1,1,1], whose subsequence 1+1+1+1 sums
to 4.
For x = 2 it is [2,1,1,2] and 2+2 sums to 4.
For x = 3 and x = 4 the original array is unchanged and 1+3 sums to 4.
```

### Example 2

```text
Input: nums = [5,1,4,2,5,3], k = 7
Output: [false,true,true,true,true,true]
Explanation:
At x = 1 every element clips to 1, so reachable sums are 0 through 6 and 7
cannot be formed. From x = 2 onward it can — 2+2+2+1 works at x = 2,
3+3+1 works at x = 3, and 1+2+4 works from x = 4 up.
```

### Example 3

```text
Input: nums = [3,3,3], k = 6
Output: [false,true,true]
Explanation:
At x = 1 the clipped array [1,1,1] only reaches sums 0 to 3. At x = 2 the
sum 2+2+2 hits 6, and at x = 3 the pair 3+3 does as well.
```

### Constraints

- `1 <= n == nums.length <= 4000`
- `1 <= nums[i] <= n`
- `1 <= k <= 4000`

## Hints

### Hint 1

Count how many elements hold each value. When the clip level rises from
`x - 1` to `x`, the only change is that elements equal to `x` stop being
lowered, so a subset-sum structure over the elements at most `x` can be
extended incrementally instead of rebuilt.

### Hint 2

The elements strictly above `x` all become `x`, so together they contribute
some multiple `m * x` with `m` between `0` and their count `t`. The answer
for `x` is yes exactly when an achievable sum `s` of the untouched pool
leaves `k - s` a multiple of `x` no larger than `t * x`.
