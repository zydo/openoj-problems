# The Missing Value

## Description

You are given an array `nums` of `n` distinct integers. Each of them lies
between `0` and `n`, and those `n + 1` candidates are exactly the values the
array could hold — so precisely one value in that range never shows up.

Return the value that is absent.

### Example 1

```text
Input: nums = [4,1,0,3]
Output: 2
Explanation: Four entries, so the candidate range is 0 through 4. Present are
0, 1, 3 and 4; the one left out is 2.
```

### Example 2

```text
Input: nums = [1]
Output: 0
Explanation: One entry, candidates 0 and 1. The array took the 1, so 0 is
missing.
```

### Example 3

```text
Input: nums = [7,5,3,1,0,2,6]
Output: 4
Explanation: Seven entries, candidates 0 through 7 — and 4 is the one that
fails to appear.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10^4`
- `0 <= nums[i] <= n`
- No two entries are equal.

### Follow-up

One pass over the array and no auxiliary structure will do it. What pair of
running quantities — computed without touching the array a second time — pins
down the absent value?

## Hints

### Hint 1

The candidates form a complete run from 0 to n, so their total is known in
advance without looking at the array at all.

### Hint 2

Subtract what the array actually adds up to from that known total, and the
difference has nowhere to go but into the single absent value.

### Hint 3

Summing is not the only way to pair knowns against unknowns: XOR also cancels
when the same value appears on both sides, and it never grows past the width of
its operands.
