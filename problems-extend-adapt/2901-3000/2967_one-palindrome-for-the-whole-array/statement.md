# One Palindrome for the Whole Array

## Description

You are given an integer array `nums` of length `n`.

In one move you pick an index `i` and a positive integer `x`, then
rewrite `nums[i]` as `x`; the move costs `|nums[i] - x|`, the distance
between the old and the new value. You may make any number of moves,
including none.

A palindromic number reads the same forwards and backwards — `121`,
`2552`, and `65756` qualify, while `24`, `46`, and `235` do not. The
goal is to finish with every element holding one shared value, and that
shared value must be a palindromic number below 10⁹.

Return the smallest possible total cost of reaching that state.

### Example 1

```text
Input: nums = [4,7,9,12]
Output: 10
Explanation: Rewrite 9 and 12 as 7, which is itself palindromic. The
total is |4 - 7| + |7 - 7| + |9 - 7| + |12 - 7| = 3 + 0 + 2 + 5 = 10.
No other palindromic target achieves a lower cost.
```

### Example 2

```text
Input: nums = [18,3,154]
Output: 155
Explanation: Move everything to 22. That costs |18 - 22| + |3 - 22| +
|154 - 22| = 4 + 19 + 132 = 155, and no other palindromic target
achieves a lower cost.
```

### Example 3

```text
Input: nums = [123,321,123]
Output: 204
Explanation: Choose 121, the palindrome nearest the two 123s. The cost
is |123 - 121| + |321 - 121| + |123 - 121| = 2 + 200 + 2 = 204, and no
other palindromic target achieves a lower cost.
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Sort `nums` and locate its median — either middle element is fine when
the length is even. Call that value `m`.

### Hint 2

Only two palindromes can ever be optimal: the largest one not above `m`
and the smallest one not below it. Stepping further from the median only
raises the total, so this bracketing pair is the entire search space.

### Hint 3

Each candidate can be produced either by scanning outward from `m` and
testing neighboring values, or directly, by mirroring half of a
candidate's digits around the center.

### Hint 4

It also works to enumerate every palindrome below 10⁹ up front — there
are roughly 110,000 of them — sort that table, and binary-search for the
pair that brackets the median.
