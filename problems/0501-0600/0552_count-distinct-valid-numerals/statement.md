# Count Distinct Valid Numerals

## Description

You are given a string `binary` made up of the characters `0` and `1`.

Pick any subset of its positions and read off the kept characters in order;
that string is a subsequence of `binary`. Read as a binary numeral, a
subsequence is **valid** when it does not start with `0` — the lone string
`0` itself being the one exception.

Count how many distinct valid numerals arise this way. The same numeral
produced at several different positions counts once, and the answer is
returned modulo `10^9 + 7` because it can grow astronomically with the
input length.

For instance, from `binary = "011"` you can produce the valid numerals
`0`, `1`, and `11`, so the answer is 3.

### Example 1

```text
Input: binary = "011"
Output: 3
Explanation: The distinct valid numerals are "0", "1", and "11".
```

### Example 2

```text
Input: binary = "110"
Output: 5
Explanation: The distinct valid numerals are "0", "1", "10", "11", and "110".
```

### Example 3

```text
Input: binary = "001011"
Output: 7
Explanation: The distinct valid numerals are "0", "1", "10", "11", "101",
"111", and "1011". The two leading zeros cannot begin a longer numeral.
```

### Constraints

- `1 <= binary.length <= 10⁵`
- `binary` contains only the characters `0` and `1`.

## Hints

### Hint 1

Subsequences taken from different positions can spell the very same string.
What matters about a subsequence here is only the numeral it spells, so ask
how many distinct *values* are reachable.

### Hint 2

Split the reachable values by their last digit: how many end in `0`, and how
many end in `1`? One pass over the string can maintain exactly those two
counts for the prefix read so far.

### Hint 3

When the next character arrives, every value built so far can be extended by
it — and each value that already ended in that character is the extension of
something shorter. What does that make the new count for that ending digit?
