# A Pair Apart In Place And Value I

## Description

You are given a 0-indexed integer array `nums` of length `n`, together
with two integers `indexGap` and `valueGap`. Look for two positions `i`
and `j` inside `[0, n - 1]` that clear both of these bars at once:

- the positions are far enough apart: `abs(i - j) >= indexGap`;
- the values are far enough apart: `abs(nums[i] - nums[j]) >= valueGap`.

Return them as `[i, j]`. When several pairs qualify, any one is
acceptable, and when nothing qualifies return `[-1, -1]`.

Note: the two positions are allowed to coincide — with `indexGap` equal
to `0`, `i = j` is a legal choice.

### Example 1

```text
Input: nums = [10,3,8,15], indexGap = 2, valueGap = 5
Output: [0,3]
Explanation: Positions 0 and 3 sit 3 apart and hold 10 versus 15, a
difference of 5, so both bars are cleared. [3,0], [1,3], and [3,1] work
just as well.
```

### Example 2

```text
Input: nums = [9,2], indexGap = 1, valueGap = 6
Output: [0,1]
Explanation: The only far-enough pair is (0, 1), and its values 9 and 2
differ by 7, which clears the value bar of 6. [1,0] is equally valid.
```

### Example 3

```text
Input: nums = [2,2,5], indexGap = 2, valueGap = 4
Output: [-1,-1]
Explanation: Being 2 apart leaves only the pair (0, 2), whose values 2
and 5 differ by just 3 — short of 4. No pair satisfies both conditions,
so [-1,-1] comes back.
```

### Constraints

- `1 <= n == nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= indexGap <= 100`
- `0 <= valueGap <= 50`

## Hints

### Hint 1

The array is tiny; checking every candidate pair directly is affordable.

### Hint 2

Loop over all ordered pairs `(i, j)` and test the two inequalities
exactly as written — the first pair that passes is your answer.
