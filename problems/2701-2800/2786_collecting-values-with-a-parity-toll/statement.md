# Collecting Values With A Parity Toll

## Description

You are given a 0-indexed integer array `nums` and a positive integer
`x`. A walk through the array starts at position `0` and grows by
repeated jumps: from the position `i` you currently occupy you may jump
to any position `j` with `i < j`.

Every position you land on pays you its value `nums[i]` — the opening
position's value is yours from the start — but a jump from `i` to `j`
whose endpoint values `nums[i]` and `nums[j]` have different parities
charges you a toll of `x`.

Return the largest possible running total over any such walk.

### Example 1

```text
Input: nums = [3,2,7,4,1], x = 4
Output: 11
Explanation: Jump 0 -> 2 -> 4 and collect 3, 7, and 1. Every value on
this walk is odd, so no toll is ever charged, and the total is
3 + 7 + 1 = 11. Detouring through an even value would hand back more in
tolls than the detour collects.
```

### Example 2

```text
Input: nums = [1,100,2,200], x = 1
Output: 302
Explanation: Visit every position: 0 -> 1 -> 2 -> 3 collects
1 + 100 + 2 + 200 = 303. The only parity switch happens on the jump
1 -> 100 (odd to even), costing one toll of 1, so the total is 302.
Here the big values make paying the toll worthwhile.
```

### Example 3

```text
Input: nums = [5,1,9,3], x = 2
Output: 18
Explanation: All four values are odd, so the walk can visit every
position without ever paying a toll: 5 + 1 + 9 + 3 = 18.
```

### Constraints

- `2 <= nums.length <= 10^5`
- `1 <= nums[i], x <= 10^6`

### Hint 1

The exact positions behind you do not matter — only the best total so
far for each parity of the last visited value. Keep just two running
candidates: the top score of a walk ending on an odd value, and the top
score of one ending on an even value.

### Hint 2

Scan the values left to right. A new value `v` of parity `p` must end
its walk, so it sets `best[p] = max(best[p] + v, best[other] + v - x)`,
starting from `best[nums[0] % 2] = nums[0]`. The answer is the larger
final candidate.
