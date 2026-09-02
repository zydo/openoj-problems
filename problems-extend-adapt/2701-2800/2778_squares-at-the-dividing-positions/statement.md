# Squares At The Dividing Positions

## Description

You are given an array `nums` of `n` integers, with positions counted
from 1.

Position `i` is a _dividing position_ when it divides the length even
— that is, when `n % i == 0`. Only the elements standing on dividing
positions matter here.

Add up the squares of the elements on every dividing position of
`nums`, and return that total.

### Example 1

```text
Input: nums = [3,5,2,8,7,6]
Output: 74
Explanation: The length is 6, whose divisors are 1, 2, 3, and 6 — so
the dividing positions hold the values 3, 5, 2, and 6. The 8 at
position 4 and the 7 at position 5 sit out, since 4 and 5 divide no
6. The total is 3² + 5² + 2² + 6² = 9 + 25 + 4 + 36 = 74.
```

### Example 2

```text
Input: nums = [10]
Output: 100
Explanation: A length-1 array has 1 as its only divisor, so the single
element stands on a dividing position: 10² = 100.
```

### Example 3

```text
Input: nums = [4,1,9,2]
Output: 21
Explanation: The length is 4, divisible by 1, 2, and 4 but not by 3 —
the 9 at position 3 is skipped. The rest square to 16 + 1 + 4 = 21.
```

### Constraints

- `1 <= nums.length == n <= 50`
- `1 <= nums[i] <= 50`

### Hint 1

A single sweep settles it: visit each position `i` from 1 through `n`
once and let the modulo test `n % i == 0` decide whether its element
counts.

### Hint 2

Mind the shift between counting and storage — position `i` lives at
subscript `i - 1` in most languages. Square each survivor where it
stands and keep a running total.
