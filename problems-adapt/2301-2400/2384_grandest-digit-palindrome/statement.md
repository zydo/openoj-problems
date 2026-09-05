# Grandest Digit Palindrome

## Description

You are handed a string `num` made up entirely of digit characters.

Pick any subset of its digits — at least one, and leftovers may be
abandoned — and arrange them in any order you like so the result reads
the same forward and backward. Among every palindrome that can be built
this way, return the one with the greatest numeric value, expressed as a
string. The answer must not begin with a zero.

### Example 1

```text
Input: num = "31329177"
Output: "7319137"
Explanation: The digits contain pairs of 7s, 3s, and 1s, plus lone 2 and
9. Lay the pairs out largest digit first — 731 — seat the biggest
leftover digit 9 in the middle, and mirror the half: 7319137.
```

### Example 2

```text
Input: num = "55005"
Output: "50505"
Explanation: Three 5s supply one pair plus a spare center 5, and the two
zeroes form a pair that trails the 5s on both sides, giving 50505.
```

### Example 3

```text
Input: num = "00000"
Output: "0"
Explanation: Any arrangement of these digits would start with a zero,
which is forbidden. The lone digit 0 itself is therefore the answer.
```

### Constraints

- `1 <= num.length <= 10⁵`
- `num` is composed only of the characters `'0'`–`'9'`.

## Hints

### Hint 1

Setting aside an optional middle digit, a palindrome is really a left
half plus its mirror — whatever a position holds, its reflected position
must hold too.

### Hint 2

A longer palindrome beats a shorter one, and equal-length palindromes
are ordered by their leading digits, so greedily consuming digits as
pairs from 9 downward serves both goals at once.

### Hint 3

Tally each digit's occurrences. Sweep from 9 down to 0, moving
`count / 2` copies of every digit into the left half; the first digit
found with an odd tally is the strongest candidate for the center.

### Hint 4

Zero pairs only count once a nonzero digit stands in front — strip them
off the front of the half. If nothing usable survives, the single digit
`"0"` is the answer.
