# Zeros Kept Apart

## Description

Given a positive integer `n`, list every binary string of length `n` in
which `"00"` never appears — no two neighboring characters are both `0`.
A one-character string has no neighboring pair to worry about, so both
`"0"` and `"1"` qualify.

Return the strings in ascending lexicographic order; because all of them
share the length `n`, that is the same order as reading them as binary
numbers from smallest up.

### Example 1

```text
Input: n = 2
Output: ["01","10","11"]
```

`"00"` is the only length-2 string that gets rejected.

### Example 2

```text
Input: n = 4
Output: ["0101","0110","0111","1010","1011","1101","1110","1111"]
```

Eight of the sixteen length-4 strings survive; each keeps its zeros
separated by at least one `1`.

### Constraints

- `1 <= n <= 18`

## Hints

### Hint 1

Grow an answer one character at a time: whether a position may take a `0`
depends only on the character before it.

### Hint 2

After a `0` the next character is forced to be `1`; after a `1` either
character may follow.

### Hint 3

A depth-first walk over those two choices visits every qualifying string
exactly once — and trying `0` before `1` emits them already sorted.
