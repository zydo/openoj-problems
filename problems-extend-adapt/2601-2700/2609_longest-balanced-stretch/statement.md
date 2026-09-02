# Longest Balanced Stretch

## Description

You are given a binary string `s`, made up only of zeroes and ones.

A stretch of `s` — a contiguous run of its characters — is balanced when
every zero in it stands before every one of its ones and the two kinds
appear equally often. In other words, a balanced stretch looks like some
number of zeroes followed by exactly that same number of ones. The empty
stretch counts as balanced too.

Return the length of the longest balanced stretch of `s`.

### Example 1

```text
Input: s = "101000111"
Output: 6
Explanation: The stretch "000111" pairs three zeroes with three ones and
spans 6 characters — nothing longer balances.
```

### Example 2

```text
Input: s = "001100"
Output: 4
Explanation: The best balanced stretch is "0011", with length 4. The
trailing zero has no ones after it to pair with.
```

### Example 3

```text
Input: s = "0000"
Output: 0
Explanation: With no ones anywhere, only the empty stretch balances, so
the answer is 0.
```

### Constraints

- `1 <= s.length <= 50`
- Each character of `s` is either `'0'` or `'1'`.

## Hints

### Hint 1

Every balanced stretch is one block of zeroes sitting directly in front of
one block of ones — so each place where a zero-block meets a one-block is
worth measuring.

### Hint 2

At such a meeting point the balanced stretch can use twice the shorter of
the two blocks; the answer is the largest value that rule produces
anywhere in the string.
