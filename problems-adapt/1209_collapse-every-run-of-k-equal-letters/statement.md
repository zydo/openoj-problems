# Collapse Every Run of k Equal Letters

## Description

You are given a string `s` of lowercase letters and an integer `k`.

One collapse picks `k` equal letters sitting side by side and deletes them,
welding whatever stood to the left of the block onto whatever stood to the
right. Repeat collapses anywhere in the string for as long as one applies.

Return the string that remains when no further collapse is possible. It is
guaranteed to be the same no matter the order you collapse in.

### Example 1

```text
Input: s = "mammal", k = 3
Output: "mammal"
Explanation: No letter appears three times in a row, so nothing collapses.
```

### Example 2

```text
Input: s = "aabbba", k = 3
Output: ""
Explanation: The block "bbb" goes first, and the two "aa" runs on either side
weld into "aaa" — which collapses in turn, leaving nothing.
```

### Example 3

```text
Input: s = "seeeeal", k = 2
Output: "sal"
Explanation: The four e's fall as two consecutive pairs; everything else
stands.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `2 <= k <= 10⁴`
- `s` contains lowercase English letters only

## Hints

### Hint 1

A collapse only ever brings the block's two neighbors into contact, so every
surviving letter keeps its left-to-right order all the way down. One pass can
carry the whole chain reaction.

### Hint 2

Hold the processed prefix in compressed form — pairs of (letter, current run
length). Each arriving letter either lengthens the run on top or begins a new
pair.

### Hint 3

The instant a run's length hits `k`, discard the pair. Whatever sat beneath
may then fuse with letters still to come, and later steps handle that on
their own because every comparison looks at the current top.
