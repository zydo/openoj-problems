# Smallest Set With Last Digit K

## Description

You are given two integers, `num` and `k`. Assemble a collection of positive
integers that obeys both rules:

- every integer in the collection ends with the digit `k`;
- the integers add up to exactly `num`.

Values may repeat: the same integer can be used several times. Return the
fewest integers such a collection can contain, or `-1` when `num` cannot be
reached at all. An empty collection has sum `0`, so `num = 0` is always
satisfiable with zero integers.

Here the last digit of a number is its rightmost digit in base ten.

### Example 1

```text
Input: num = 46, k = 6
Output: 1
Explanation: The single number 46 ends in 6 and sums to 46, so one integer
suffices.
```

### Example 2

```text
Input: num = 28, k = 4
Output: 2
Explanation: The collection [4, 24] works: both integers end in 4 and their
sum is 28. No single integer ending in 4 equals 28, so 2 is minimal.
```

### Example 3

```text
Input: num = 21, k = 5
Output: -1
Explanation: No amount of adding numbers that end in 5 can land exactly on 21.
```

### Example 4

```text
Input: num = 100, k = 9
Output: 10
Explanation: Nine copies of 9 together with 19 give 9*9 + 19 = 100, and no
shorter collection reaches 100.
```

### Constraints

- `0 <= num <= 3000`
- `0 <= k <= 9`

## Hints

### Hint 1

Only the final digit of each element is pinned down; everything above it
comes in whole multiples of ten. So a collection of `c` numbers always sums
to `c * k` plus some multiple of ten.

### Hint 2

Scan candidate sizes `c` from 1 upward. A size works exactly when
`c * k <= num` (use `c * 10 <= num` when `k = 0`, since 0 itself is not
positive) and the remainder `num - c * k` is divisible by ten. The first
size that passes is the answer.
