# Dot-Star Pattern Matching

## Description

You are given a string `s` and a pattern `p` built from lowercase letters and
two special symbols:

- `.` stands for exactly one arbitrary character;
- `*` stands for zero or more copies of the symbol immediately before it, and
  that pair (`x*`, `.*`) acts as one unit.

Return whether `p` describes `s` in its entirety — a match must reach from the
first character to the last, not merely cover a piece of it.

### Example 1

```text
Input: s = "seed", p = "see"
Output: false
Explanation: "see" describes only the first three characters; the trailing
"d" is left over, so the whole string is not matched.
```

### Example 2

```text
Input: s = "moo", p = "mo*"
Output: true
Explanation: The unit "o*" takes two copies of 'o' here, so the pattern
covers "moo" completely.
```

### Example 3

```text
Input: s = "drum", p = ".*um"
Output: true
Explanation: ".*" takes "dr" — zero or more arbitrary characters — and the
literals "um" finish the string.
```

### Constraints

- `1 <= s.length <= 20`
- `1 <= p.length <= 20`
- `s` holds lowercase English letters only.
- `p` holds lowercase English letters, `.`, and `*` only.
- Every `*` in `p` directly follows a letter or `.`.

## Hints

### Hint 1

Judge prefixes against prefixes: let a table cell say whether the first `i`
characters of `s` are described by the first `j` symbols of `p`.

### Hint 2

A cell whose pattern ends in `*` splits into two covers: drop the whole `x*`
unit (zero copies), or — when `x` describes `s`'s next character — spend one
copy and stay on the same pattern cell.

### Hint 3

Without a trailing `*`, one pattern symbol must consume one character it
describes, so the cell inherits the diagonal neighbour plus that one check.

### Hint 4

The empty string is described by the empty pattern, and a non-empty pattern
can still describe nothing when it is entirely `x*` units — seed the table
accordingly.
