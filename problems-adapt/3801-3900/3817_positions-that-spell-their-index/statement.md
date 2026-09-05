# Positions That Spell Their Index

## Description

You are given a string `s` made up entirely of digit characters.

Call a position `i` self-spelled when some substring of `s` that ends
exactly at position `i` is equal to the decimal representation of `i`
itself.

Return every self-spelled position of `s`, listed in increasing order.

### Example 1

```text
Input: s = "00000000010"
Output: [0,10]
Explanation: Position 0 qualifies because its representation "0" is the
substring s[0]. Position 10 qualifies because "10" — the decimal form of
10 — is the substring s[9..10]. Every other position i fails: the digit
s[i] is "0", which never equals the decimal form of a positive i, and no
position other than 10 has a multi-digit representation available.
```

### Example 2

```text
Input: s = "00"
Output: [0]
Explanation: Position 0 matches via "0". Position 1 would need a "1"
ending there, but both characters are "0", so it does not qualify.
```

### Example 3

```text
Input: s = "56789"
Output: []
Explanation: No position's decimal representation matches any substring
ending there — each single-digit position needs digit i at s[i] and the
characters never line up that way.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of the digits `'0'` through `'9'`.

## Hints

### Hint 1

The substring must end precisely at position `i` — trailing positions
other than `i` are never allowed.

### Hint 2

Since the wanted text is fixed (the decimal digits of `i`), its length is
fixed too, so only one candidate window per position is worth checking.

### Hint 3

For each `i`, compare `str(i)` against the suffix of `s` that ends at `i`
and has that same length; a mismatch on any character disqualifies `i`.
