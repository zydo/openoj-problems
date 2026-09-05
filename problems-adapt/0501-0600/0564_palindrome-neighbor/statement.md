# Palindrome Neighbor

## Description

You are given a string `n` holding a positive integer with no leading
zeros. Find the palindrome closest to that integer on the number line,
excluding the integer itself, and return it as a string.

"Closest" means the smallest absolute difference from the value of `n`.
If two palindromes tie for closest, report the smaller of the two.

### Example 1

```text
Input: n = "678"
Output: "676"
```

### Example 2

```text
Input: n = "1000"
Output: "999"
Explanation: 999 and 1001 are equally close to 1000, so the smaller
value, 999, is returned.
```

### Constraints

- `1 <= n.length <= 18`
- `n` consists only of digits.
- `n` has no leading zeros.
- The integer represented by `n` lies in the range `[1, 10^18 - 1]`.

## Hints

### Hint 1

Checking every integer outward from `n` until a palindrome turns up is
too slow for 18-digit inputs — the search needs a way to jump straight
to nearby palindrome candidates.

### Hint 2

Walk through a handful of concrete cases by hand — a value just above a
power of ten, a value just below one, and an ordinary interior value —
and notice how few distinct palindromes can possibly be nearest in each
case.

### Hint 3

A palindrome's second half is completely determined by its first half.
Once you can build a palindrome from a chosen first half, ask which
first halves near `n`'s own could possibly produce the closest result.

### Hint 4

Work out the nearest palindrome to 12932, to 99800, and to 12120 by
hand. What small, fixed set of candidate values kept reappearing?
