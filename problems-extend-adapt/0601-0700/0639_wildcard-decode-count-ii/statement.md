# Wildcard Decode Count II

## Description

A letter-to-digit cipher maps `'A'` through `'Z'` onto the numbers `1`
through `26`, written with no leading zero:

```text
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
```

To recover the letters from an enciphered digit string, the digits are
split into consecutive groups, each read back through the mapping (a
string may split more than one way). For instance `"11106"` splits as
`(1 1 10 6)` to give `"AAJF"`, or as `(11 10 6)` to give `"KJF"`. The
split `(1 11 06)` is never valid, because `"06"` is not the same token
as `"6"` and so maps to nothing.

The cipher text may also contain a wildcard character `'*'`, standing
in for any single digit from `'1'` through `'9'` — never `'0'`. A `'*'`
therefore represents nine possible digit strings at once, and decoding
a text containing it means decoding every string it could stand for.
For example `"4*"` stands for `"41"` through `"49"`, so decoding `"4*"`
counts every decoding across all nine substitutions together.

Given a cipher text `s` made only of digits and `'*'` characters,
report how many distinct letter strings it could decode to. The count
can grow enormous, so report it modulo `10⁹ + 7`.

### Example 1

```text
Input: s = "5"
Output: 1
Explanation: A single nonzero digit has exactly one reading, "E".
```

### Example 2

```text
Input: s = "3*"
Output: 9
Explanation: The wildcard stands for the nine strings "31" through
"39". None of them falls in the two-letter range 10-26, so each reads
only as two single digits ("C" followed by one of "A" through "I"),
giving 9 total decodings.
```

### Example 3

```text
Input: s = "*4"
Output: 11
Explanation: The wildcard stands for the nine strings "14" through
"94". Two of them, "14" and "24", also form a valid two-digit letter
("N" and "X"), so each of those contributes 2 decodings while the
remaining seven contribute 1 each: 2 * 2 + 7 * 1 = 11.
```

### Constraints

- `1 <= s.length <= 10⁵`
- Every character of `s` is a digit or `'*'`.
