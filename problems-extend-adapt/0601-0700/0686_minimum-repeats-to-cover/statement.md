# Minimum Repeats to Cover

## Description

You are given two strings, `a` and `b`. Stack copies of `a` end to end
(`a`, then `aa`, then `aaa`, and so on) and find the fewest copies whose
concatenation contains `b` as a substring. Report that count, or `-1`
if no number of copies ever will.

For clarity: `a` repeated `0` times is the empty string, repeated `1`
time is `a` itself, and repeated `2` times is `a` followed by another
copy of `a`.

### Example 1

```text
Input: a = "xy", b = "yxyxy"
Output: 3
Explanation: Repeating a three times gives "xyxyxy", and "yxyxy" sits
inside it starting at the second character.
```

### Example 2

```text
Input: a = "x", b = "xy"
Output: -1
```

`b` contains the letter `y`, which never appears in any repetition of
`a`, so `b` can never become a substring no matter how many copies are
stacked.

### Constraints

- `1 <= a.length, b.length <= 10⁴`
- Both `a` and `b` consist only of lowercase English letters.
