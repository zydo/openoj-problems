# Enough Zeros Between the Ones

## Description

You are given a binary array `nums` and an integer `k`. Answer `true`
when every pair of `1`s in the array is separated by at least `k`
places, and `false` otherwise.

"Separated by at least `k` places" is about the zeros in between: two
`1`s qualify when at least `k` zeros lie strictly between them, which
is the same as saying their indices differ by `k + 1` or more. Every
neighboring pair of `1`s — neighboring among the `1`s, ignoring the
zeros — has to clear the bar.

### Example 1

```text
Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each neighboring pair of 1s has two zeros sitting between
it (the marked indices in the figure), which meets the required
separation of k = 2.
```

### Example 2

```text
Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The last two 1s (marked in the figure) have only one zero
between them, one short of the required two.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= k <= nums.length`
- Each `nums[i]` is `0` or `1`

## Hints

### Hint 1

Scan left to right and remember the index where you last saw a `1`;
when you meet the next one, the distance between the two indices tells
you immediately whether the pair fails.
