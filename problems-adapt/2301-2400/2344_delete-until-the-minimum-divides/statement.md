# Delete Until the Minimum Divides

## Description

Two positive integer arrays are given: `nums` and `numsDivide`. You may
strike any elements you like from `nums` (each strike removes one
element). Your goal is a state where the smallest value still present in
`nums` divides every value in `numsDivide` — that is, each `numsDivide`
entry leaves remainder 0 when divided by it.

Report the fewest strikes that achieve this, or -1 when no amount of
striking can get there. (A value `x` divides `y` exactly when `y % x ==
0`.)

### Example 1

```text
Input: nums = [6,4,10,4,15], numsDivide = [20,30,50]
Output: 3
Explanation: The three smallest entries — 4, 4, and 6 — each fail to
divide 20, 30, and 50 simultaneously, so they must all go. That leaves
[10,15], whose minimum 10 divides every target. Three strikes is optimal.
```

### Example 2

```text
Input: nums = [7,11], numsDivide = [3]
Output: -1
Explanation: Neither 7 nor 11 divides 3, and removing one only leaves the
other, so the goal is unreachable.
```

### Example 3

```text
Input: nums = [8,12,18,30], numsDivide = [72,120,180]
Output: 1
Explanation: Everything in numsDivide shares the common divisor 12, so
striking the lone 8 leaves 12 as the minimum and the goal is met.
```

### Constraints

- `1 <= nums.length, numsDivide.length <= 10⁵`
- `1 <= nums[i], numsDivide[i] <= 10⁹`

## Hints

### Hint 1

Any value that divides every element of a collection also divides the
collection's greatest common divisor — and the converse holds too, so the
whole second array can be replaced by a single number.

### Hint 2

With that one number in hand, walk `nums` in ascending order: everything
smaller than the first value that passes the divisibility test has to go.
