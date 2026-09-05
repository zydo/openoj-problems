# Packing Same-Letter Bookends

## Description

Call a substring of `word` a bookend when it is at least four characters
long and its first and last characters are the same letter. Bookends are
compatible with each other only when they share no position.

Choose as many pairwise non-overlapping bookends as you can, and return
how many you managed to fit.

### Example 1

```text
Input: word = "abcdeaxxxxaaaa"
Output: 3
Explanation:
Take "abcdea" (from the a at index 0 through the a at index 5), then
the run "xxxx", then the closing "aaaa" — three picks, none sharing a
character, and no room remains for a fourth.
```

### Example 2

```text
Input: word = "abcaxbcxb"
Output: 2
Explanation:
The a-pair forms "abca", and once those positions are spent, the later
b-pair still yields "bcxb" — two picks in total.
```

### Example 3

```text
Input: word = "abab"
Output: 0
Explanation:
Matching letters here all sit two apart, so the longest same-letter
spans — "aba" and "bab" — run only three characters, one short of
qualifying. No bookend exists at all.
```

### Constraints

- `1 <= word.length <= 2 * 10⁵`
- `word` contains only lowercase English letters.

## Hints

### Hint 1

Each pick is really an interval `[j, i]` with `word[j] == word[i]` and
`i - j >= 3`, and two picks clash exactly when their intervals overlap —
the classic earliest-finish-first scheduling setup.

### Hint 2

Sweep left to right, remembering for each letter its first position
inside the stretch since the last pick. The moment the running index
sits three or more past a letter's remembered spot, that letter offers
the earliest finish available — take the pick and clear the memory.
