# Digit-Sum Twins

## Description

Call two numbers twins when adding up their digits produces the same
total — 91 and 23 are twins because both collapse to 10, while 91 and 92
are not, since 92's digits total 11.

Given a 0-indexed array `nums` of positive integers, look for two entries
at different positions whose values are twins in this sense, and among all
such pairs return the largest `nums[i] + nums[j]` achievable. When the
array holds no twin pair at all, return -1.

### Example 1

```text
Input: nums = [2731,118,902,64,733]
Output: 3464
Explanation: 2731 and 733 are twins — both digit sums are 13 — and they
are the heaviest such pair: 2731 + 733 = 3464. The other twin pair, 118
and 64 (digit sum 10), only reaches 182.
```

### Example 2

```text
Input: nums = [43,16,52,9001,25]
Output: 95
Explanation: Four of the values share digit sum 7 (43, 16, 52, 25), so
many pairs qualify and the best is 52 + 43 = 95. The lone 9001 (digit sum
10) has no partner.
```

### Example 3

```text
Input: nums = [1,20,300,40000]
Output: -1
Explanation: The digit sums are 1, 2, 3, and 4 — all different — so no
two entries qualify.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Values are capped at 10⁹, so a digit sum can never exceed the low double
digits — that keeps the number of distinct sums tiny.

### Hint 2

Sweep the array once, bucketing each value by its digit sum and
remembering the largest value already filed under that sum; every
newcomer immediately prices a candidate pair against the best so far.
