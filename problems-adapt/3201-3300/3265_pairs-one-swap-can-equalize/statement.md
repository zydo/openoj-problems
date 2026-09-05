# Pairs One Swap Can Equalize

## Description

You are given an array `nums` of positive integers.

Two values `x` and `y` are a match for each other in this problem when one
of them can be turned into the other by a single exchange of two digit
positions — the exchange, if it happens at all, is made inside one of the
two numbers, and skipping the exchange only works when they are already
equal. Leading zeros are fine: a number may shed digits' worth of length
when the leading digit is swapped inward (an exchange can turn `30` into
`03`, which is `3`).

Count the index pairs `i < j` whose entries `nums[i]` and `nums[j]` match
under that rule.

### Example 1

```text
Input: nums = [10,1,100]
Output: 3
Explanation: All three pairs match. 10 becomes "01", which reads as 1;
100 becomes "010", which reads as 10; and 100 also becomes "001", which
reads as 1.
```

### Example 2

```text
Input: nums = [21,12,5]
Output: 1
Explanation: Only 12 and 21 pair up — exchanging the digits of 12 gives
21 — and neither of them can reach the un-splittable 5.
```

### Example 3

```text
Input: nums = [8,88,808]
Output: 1
Explanation: Exchanging two digits of 808 yields "088", which reads as 88,
so that pair matches. The lone digit 8 has no pair of positions to
exchange, and no swap reaches it either.
```

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

With no more than a hundred entries, checking every pair directly is well
within reach.

### Hint 2

For a fixed value, enumerate everything one two-digit exchange can produce
itself included — then a pair is settled by a set-membership test in
either direction.
