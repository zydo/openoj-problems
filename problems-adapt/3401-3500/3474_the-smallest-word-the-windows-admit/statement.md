# The Smallest Word The Windows Admit

## Description

You receive two strings: a flag string `str1` of length `n`, made only of
`'T'` and `'F'`, and a pattern `str2` of length `m` over lowercase
letters. Your job is to build a word of length `n + m - 1` that satisfies
every window the flags announce, where window `i` is the length-`m` slice
of the word beginning at index `i`:

- A `'T'` at `str1[i]` demands an exact match: window `i` must equal
  `str2`.
- An `'F'` at `str1[i]` demands the opposite: window `i` must differ from
  `str2` in at least one position.

Return the lexicographically smallest word that satisfies every window.
If the flags contradict each other so that no word works, return the
empty string `""`.

### Example 1

```text
Input: str1 = "TFT", str2 = "ab"
Output: "abab"
Explanation: The 'T' at index 0 forces "ab" onto positions 0-1, and the
'T' at index 2 forces "ab" onto positions 2-3. The 'F' window at index 1
then reads "ba", which already differs from "ab", so the word "abab"
satisfies all three flags — and every position is pinned by a 'T' stamp,
so nothing smaller exists.
```

### Example 2

```text
Input: str1 = "FT", str2 = "aa"
Output: "baa"
Explanation: The 'T' pins positions 1-2 to "aa". If the still-free
position 0 took 'a', the 'F' window at index 0 would read "aa" — a match,
which it forbids. Position 0 must therefore hold 'b', giving "baa".
```

### Example 3

```text
Input: str1 = "TT", str2 = "ab"
Output: ""
Explanation: The first 'T' stamps 'b' into position 1, while the second
'T' stamps 'a' into that same position. The stamps disagree, so no word
can be generated.
```

### Example 4

```text
Input: str1 = "FFF", str2 = "b"
Output: "aaa"
Explanation: Every window is a single character that merely must not be
"b", so each of the three positions takes the smallest possible letter.
```

### Constraints

- `1 <= n == str1.length <= 10⁴`
- `1 <= m == str2.length <= 500`
- `str1` consists only of the characters `'T'` and `'F'`.
- `str2` consists only of lowercase English letters.

## Hints

### Hint 1

Positions covered by a 'T' window have no choice at all. Collect those
forced letters first; two windows that force different letters into the
same position end the search immediately.

### Hint 2

Positions no 'T' window touches should begin as small as the alphabet
allows — every one of them can start at the same lowest letter.

### Hint 3

A forbidden window that nevertheless matches the pattern can be broken at
exactly one spot with the smallest damage: its last position that no 'T'
stamp owns.

### Hint 4

Process the forbidden windows from left to right and re-read each one
after earlier repairs; a substring-matching failure table keeps those
re-reads cheap.
