# Stirred Strings

## Description

One string can be stirred into another by repeatedly cutting it and
optionally swapping the pieces. Starting from a string `s`, one stir
works like this:

- If `s` is a single character, stop.
- If `s` is longer, cut it at any position into two non-empty pieces
  `p` and `q`, so `s = p + q`. Then either keep the pieces in place
  (`s` becomes `p + q`) or exchange them (`s` becomes `q + p`). Each
  of the two pieces is now stirred the same way, recursively.

Cutting and swapping can therefore rearrange a string's internal
blocks in many different ways. You are given two strings `s1` and
`s2` of equal length; decide whether some sequence of stirs applied
to `s1` can end up producing exactly `s2`.

### Example 1

```text
Input: s1 = "speak", s2 = "peaks"
Output: true
```

Cut `"speak"` into `"s"` and `"peak"`, exchange the two pieces so the
string reads `"peaks"`, and let every deeper cut inside `"peak"` keep
its pieces in place — the final string is `"peaks"`.

### Example 2

```text
Input: s1 = "tower", s2 = "wrote"
Output: false
```

The two strings hold the same letters, but no sequence of cuts and
swaps can turn one into the other.

### Example 3

```text
Input: s1 = "same", s2 = "same"
Output: true
```

The strings are already equal; every cut can simply keep its pieces
in their current order.

### Constraints

- `s1` and `s2` have the same length.
- `1 <= s1.length <= 30`
- Both strings consist only of lowercase English letters.
