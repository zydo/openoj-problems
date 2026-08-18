# Expand Bracket Repeats

## Description

A string is written in a compression code where a bracketed group preceded by
a count, `k[group]`, stands for the group's contents written out `k` times in
a row. Groups may nest: a group can itself contain further `k[group]`
entries. Given such a string, return it fully written out.

For instance, `2[ab]` means `abab`, and `2[x3[y]z]` means the inner `3[y]`
is unrolled first (`yyy`), so the outer group reads `xyyyz` — twice.

The input is always a well-formed encoding: brackets balance, a count always
precedes its bracket directly, counts are positive, and letters never carry
a count (nothing like `3a`, and nothing like `2[4]` either — the original
text contains no digits, so digits appear only as counts). The data is such
that the fully written-out string never exceeds `10⁵` characters.

### Example 1

```text
Input: s = "2[ab]3[c]f"
Output: "ababcccf"
Explanation: Two groups and a loose letter: ab twice, then c three times,
then f.
```

### Example 2

```text
Input: s = "2[x3[y]z]"
Output: "xyyyzxyyyz"
Explanation: The inner group expands first, so one outer copy is x + yyy + z;
two copies follow.
```

### Example 3

```text
Input: s = "10[ab]c"
Output: "ababababababababababc"
Explanation: Counts may have several digits — here ten copies of `ab` —
and a loose letter may trail the final group.
```

### Constraints

- `1 <= s.length <= 30`
- `s` is built from lowercase English letters, digits, and the brackets
  `'['` and `']'`.
- `s` is a well-formed encoding as described above.
- Every count `k` in `s` lies in the range `[1, 300]`.
- The expanded string has at most `10⁵` characters.

## Hints

### Hint 1

Groups nest, and while you are inside an inner group you must remember the
half-built text surrounding it plus the count waiting to apply. A stack of
`(surrounding_text, count)` frames — one per bracket not yet closed — holds
exactly that, at any depth.

### Hint 2

Read the string once, left to right. Digits fold into the pending count;
`[` parks the current text and count on the stack and starts fresh; `]`
pops a frame and appends the finished inner text to the restored outer
text, repeated according to the popped count.

### Hint 3

Letters outside any bracket machinery are just text: append them to whatever
segment is currently being built. When the scan ends, every bracket has been
closed, so nothing is parked and the running segment is the answer.
