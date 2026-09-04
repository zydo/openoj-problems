# Trimming Pairs From A String

## Description

You are handed a string `s` of lowercase English letters.

A single trimming move looks at some position `i` and requires that the
letter `s[i]` appears at least once before `i` and at least once after
`i`. When it does, the move erases the nearest occurrence of `s[i]` on
the left of `i` together with the nearest occurrence of `s[i]` on the
right of `i`; the character at `i` itself survives. Both erasures are
part of the same move, and the string closes up around the gaps.

Apply moves as many times as you like, in any order. Return the length
of the shortest string you can end up with.

### Example 1

```text
Input: s = "bcbbcbb"
Output: 3
Explanation: Point i at the b of index 4: the nearest b on either side
sits at indices 2 and 5, so erasing that pair leaves "bccbb". A second
move pivots on the middle of that string's three b's and erases the
outer two, leaving "bcc". Now the lone b and the c pair each lack a
same-letter partner on one side, so nothing more can be trimmed and
the answer is 3.
```

### Example 2

```text
Input: s = "abab"
Output: 4
Explanation: No letter occurs three times, so no position ever has a
matching letter on both sides. Nothing can be trimmed and the original
length stands.
```

### Example 3

```text
Input: s = "aaaa"
Output: 2
Explanation: Two consecutive moves each erase a pair of `a`s around a
surviving pivot, shrinking the string to "aa", which can shrink no
further.
```

### Constraints

- `1 <= s.length <= 2 * 10⁵`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Track how many times each distinct letter appears; the arrangement of
the letters never affects the answer.

### Hint 2

A letter that shows up fewer than three times can never supply the
two-sided match a move needs, so its copies all survive.

### Hint 3

Once a letter occurs at least three times, a legal pivot always
exists, and moves keep removing two of its copies at a time — so an
odd count can be driven down to 1 and an even count down to 2, but no
lower.
