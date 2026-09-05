# Trim Before Encoding II

## Description

Run-length encoding rewrites a string run by run: each maximal block of
identical characters of length `2` or more becomes the character
followed by the block's length, while a block of length `1` is written
as the bare character with no count attached. Under this rule,
`"aabccc"` encodes to `"a2bc3"`.

You are given a string `s` and an integer `k`. Before encoding, you may
delete at most `k` characters from `s`, in any positions you like.
Return the smallest length the encoded string can possibly have.

### Example 1

```text
Input: s = "abbcccdddd", k = 1
Output: 6
Explanation: Left alone, s encodes to "ab2c3d4", length 7. A single
deletion cannot merge any blocks, but removing the lone 'a' (or one 'b')
leaves an encoding of length 6, such as "b2c3d4".
```

### Example 2

```text
Input: s = "ccddcc", k = 2
Output: 2
Explanation: Deleting both 'd' characters joins everything into one run
of four 'c' characters, which encodes to "c4".
```

### Example 3

```text
Input: s = "xyxyxy", k = 3
Output: 2
Explanation: Spend all three deletions on the 'y' characters: the
remaining "xxx" encodes to "x3".
```

### Example 4

```text
Input: s = "zzzzzzzzzzz", k = 0
Output: 3
Explanation: With no deletions allowed, the eleven 'z' characters encode
to "z11", whose length is 3.
```

### Constraints

- `1 <= s.length <= 100`
- `0 <= k <= s.length`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Dynamic programming over prefixes of the string works well here.

### Hint 2

Carry two things through the state: how far you have read into `s`, and
how many deletions you still have left to spend.

### Hint 3

When you decide to keep a run, scan ahead counting how many mismatches
must be deleted to fold every later copy of that character into the same
block.
