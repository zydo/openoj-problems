# Count Exact-Ratio Substrings

## Description

You are given a binary string `s` and two coprime positive integers
`num1` and `num2`.

Call a non-empty substring of `s` an exact-ratio substring when the ratio
of the number of `'0'` characters to the number of `'1'` characters
inside it is exactly `num1 : num2`.

For example, when `num1 = 2` and `num2 = 3`, the substring `"01011"` has
two zeros and three ones and `"1110000111"` has four zeros and six ones,
so each is exact-ratio, while `"11000"` (two ones and three zeros) is not.

Return the number of non-empty exact-ratio substrings of `s`.

Two integers `x` and `y` are coprime when `gcd(x, y) == 1`, where `gcd` is
the greatest common divisor.

### Example 1

```text
Input: s = "0011", num1 = 1, num2 = 1
Output: 2
Explanation: The exact-ratio substrings are "01" (s[1..2], one zero and
one one) and "0011" (s[0..3], two zeros and two ones).
```

### Example 2

```text
Input: s = "101010", num1 = 1, num2 = 2
Output: 2
Explanation: Each of the substrings s[0..2] = "101" and s[2..4] = "101"
holds one zero and two ones, so both have ratio 1 : 2. No other substring
qualifies.
```

### Example 3

```text
Input: s = "111000", num1 = 2, num2 = 1
Output: 1
Explanation: Only s[2..4] = "100" has the two-to-one zero-to-one ratio;
its two zeros and single one give ratio 2 : 1.
```

### Example 4

```text
Input: s = "01010", num1 = 1, num2 = 1
Output: 6
Explanation: The six substrings with equally many zeros and ones are
"01" (twice), "10" (twice), "0101", and "1010".
```

### Constraints

- `1 <= s.length <= 10⁵`
- `1 <= num1, num2 <= s.length`
- `num1` and `num2` are coprime integers.

## Hints

### Hint 1

Let `Z` and `O` be the counts of zeros and ones in a prefix. Rewrite the
ratio condition `z : o = num1 : num2` as an equality between two products
so that it no longer involves a division.

### Hint 2

For a substring between prefix positions `l` and `r`, the condition
becomes an equality between a value computed at `r` and the same value
computed at `l` — so every valid substring is a pair of equal prefix
values.

### Hint 3

Walk the string left to right, keep a hash map of how many times each
prefix value has appeared, and add the previous count each time a value
is seen again.
