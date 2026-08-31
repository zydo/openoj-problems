# Count Palindrome Quintets

## Description

Given a string of digits `s`, return the number of palindromic subsequences
of `s` having length exactly 5. Since the answer may be very large, return
it modulo `10⁹ + 7`.

Note:

- A string is palindromic if it reads the same forward and backward.
- A subsequence is a string that can be derived from another string by
  deleting some or no characters without changing the order of the remaining
  characters.

### Example 1

```text
Input: s = "12345"
Output: 0
Explanation: Every digit is distinct, and a length-5 palindrome would need
its first and last characters to agree, so no palindromic subsequence of
length 5 exists.
```

### Example 2

```text
Input: s = "1212121"
Output: 9
Explanation: Exactly nine subsequences of length 5 read the same forwards
and backwards.
```

### Example 3

```text
Input: s = "1112111"
Output: 15
Explanation: Six of the six 1s chosen five at a time give the palindrome
"11111". The remaining nine palindromes are "11211": choose two of the
three 1s on each side of the central 2, giving 3 * 3 = 9 ways.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` consists of digits.

## Hints

### Hint 1

A length-5 palindrome has the shape `a b c b a`: two outer characters and
two inner characters mirrored around a single center.

### Hint 2

There are only 100 ordered pairs of digits `(a, b)` for the outer pair.

### Hint 3

Iterate over the center position once, and for every ordered pair `(a, b)`
multiply the number of `a b` subsequences lying before the center by the
number of `b a` subsequences lying after it.
