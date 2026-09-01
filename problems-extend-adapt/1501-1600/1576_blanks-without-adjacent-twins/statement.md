# Blanks Without Adjacent Twins

## Description

You are given a string `s` made of lowercase English letters and the
placeholder character `'?'`. Fill in every `'?'` with a lowercase
English letter so that the finished string never places the same
letter on two neighboring positions. Every letter that is not a `'?'`
must stay exactly where it is.

Apart from the `'?'` placeholders, `s` is guaranteed to contain no
two equal neighboring letters already.

Several different fillings can satisfy the no-neighbor-twins rule,
and to keep the expected answer well defined you must apply this
fixed procedure: sweep the string from left to right, and for each
`'?'` try `'a'`, `'b'`, `'c'` in that order, settling on the first
letter that differs from the character immediately before it (that
character is already final by this point) and — whenever the
character immediately after it is a real letter and not itself a
`'?'` — from that character too.

Return the string once every `'?'` has been filled.

### Example 1

```text
Input: s = "x?z"
Output: "xaz"
Explanation: The blank sits between 'x' and 'z'; 'a' clashes with
neither, so the rule takes the first candidate.
```

### Example 2

```text
Input: s = "z?z"
Output: "zaz"
Explanation: Both neighbors are the same letter 'z', so any letter
other than 'z' is legal and 'a' is chosen first.
```

### Example 3

```text
Input: s = "qq?rr"
Output: "qqarr"
Explanation: The blank's neighbors are 'q' and 'r'; 'a' differs from
both and is selected immediately.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists only of lowercase English letters and `'?'`.

## Hints

### Hint 1

Walk the string once from left to right. At each `'?'`, look at the
letter to its left and the letter to its right, and choose a
candidate that equals neither.

### Hint 2

When the left neighbor is itself a `'?'`, compare against the letter
it was replaced with earlier in the sweep, not against `'?'`.
