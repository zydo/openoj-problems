# Does The Pattern Fit

## Description

A pattern `p` is checked against a string `s`. The pattern is built from
lowercase letters plus two wildcards:

- `?` stands for exactly one arbitrary character.
- `*` stands for any run of characters, including an empty one.

The fit has to be complete: the pattern must account for every character of
`s` from start to end, not merely cover some stretch of it.

### Example 1

```text
Input: s = "flower", p = "fl?wer"
Output: true
```

The `?` absorbs the `o`, and every literal character lines up.

### Example 2

```text
Input: s = "flower", p = "f*rs"
Output: false
```

The star can swallow `lowe` and the `r` lands on the last letter — but the
pattern still owes an `s` with no string left to match against, so the
whole-string fit fails.

### Example 3

```text
Input: s = "shader", p = "s*ade*"
Output: true
```

The first star takes `h`, the literal `ade` lands in the middle, and the
second star takes the closing `r`.

### Example 4

```text
Input: s = "munchkin", p = "*k*n"
Output: true
```

The leading star runs through `munch`, then `k` matches, and the trailing
star absorbs `i` before the final `n`.

### Constraints

- `0 <= s.length, p.length <= 2000`
- `s` consists only of lowercase English letters.
- `p` consists only of lowercase English letters, `?`, and `*`.
