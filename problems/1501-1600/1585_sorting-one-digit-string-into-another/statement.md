# Sorting One Digit String Into Another

## Description

Two digit strings `s` and `t` have the same length. In one move you may
pick any non-empty run of consecutive characters inside `s` and rearrange
that run into ascending order, leaving the rest of the string untouched.
For instance, sorting the middle three characters of `"27418"` turns it
into `"21478"`.

Decide whether some sequence of such moves can turn `s` into exactly
`t`. Return `true` when it can and `false` when it cannot.

### Example 1

```text
Input: s = "71593", t = "17539"
Output: true
Explanation: Two moves suffice: sorting positions 0 through 1 gives
"17593", then sorting positions 3 through 4 gives "17539".
```

### Example 2

```text
Input: s = "213", t = "312"
Output: false
Explanation: Producing the leading `3` of `t` requires the `3` in `s` to
reach the front, but the smaller digits `2` and `1` both sit left of it
and no sort can carry a digit leftward past a smaller one.
```

### Example 3

```text
Input: s = "4141", t = "1144"
Output: true
Explanation: Sorting positions 0 through 1 gives "1441", and sorting
positions 1 through 3 then gives "1144".
```

### Example 4

```text
Input: s = "112", t = "122"
Output: false
Explanation: The two strings do not even contain the same digits with the
same multiplicities, so no amount of reordering can help.
```

### Constraints

- `s.length == t.length`
- `1 <= s.length <= 10⁵`
- Every character of `s` and `t` is a digit `0`–`9`.

## Hints

### Hint 1

Build `t` one character at a time. When the next required digit is `d`,
ask which copy of `d` still left in `s` should be sent forward, and what
could stop it from getting there.

### Hint 2

A sort can carry a digit leftward across only the digits strictly greater
than it — never across a strictly smaller one. That fixes how equal
digits may pass each other (they cannot) and tells you which occurrence
of `d` to consume first.
