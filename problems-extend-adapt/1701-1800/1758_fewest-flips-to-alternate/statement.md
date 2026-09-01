# Fewest Flips to Alternate

## Description

A string `s` is made up of the digits `'0'` and `'1'` only. One
operation lets you flip any single digit — turn a `'0'` into a `'1'`
or the other way round.

Call the string alternating when no two neighboring digits are the
same: `"010"` qualifies, `"0100"` does not. Find the smallest number
of operations that turns `s` into an alternating string.

### Example 1

```text
Input: s = "11010"
Output: 1
Explanation: Flip the first digit and the string reads "01010",
which alternates.
```

### Example 2

```text
Input: s = "0011"
Output: 2
Explanation: Reaching either alternating pattern costs two flips —
for instance 0011 becomes 0101 by flipping the second and third
digits.
```

### Example 3

```text
Input: s = "0"
Output: 0
Explanation: A single digit is trivially alternating.
```

### Constraints

- `1 <= s.length <= 10^4`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

Picture what the finished string can look like.

### Hint 2

There are only two shapes: one starting with `'0'` (`0101...`) and
one starting with `'1'` (`1010...`).

### Hint 3

Measure the flip cost against each shape and keep the cheaper one.
