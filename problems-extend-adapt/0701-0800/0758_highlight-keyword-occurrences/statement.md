# Highlight Keyword Occurrences

## Description

You are given a list of keywords `words` and a text string `s`. Wrap every
character of `s` that belongs to at least one occurrence of a keyword in a
`<b>...</b>` pair, then return the resulting string.

A character can be covered by more than one occurrence — the same keyword
appearing twice, two different keywords, or one keyword's occurrence sitting
inside another's. Whenever covered characters touch or overlap, merge them
under a single pair of tags rather than opening a new pair for every
occurrence: the output must use as few `<b>` / `</b>` pairs as possible while
still marking exactly the covered characters, and the pairs must nest and
close correctly.

### Example 1

```text
Input: words = ["de","efg"], s = "abcdefgh"
Output: "abc<b>defg</b>h"
Explanation: "de" covers indices 3-4 and "efg" covers indices 4-6; since they
share index 4, the two occurrences merge into one bolded run "defg" instead
of producing two overlapping tag pairs.
```

### Example 2

```text
Input: words = ["xyz","bc"], s = "abcdef"
Output: "a<b>bc</b>def"
Explanation: "xyz" never occurs in s, so only the occurrence of "bc" is
bolded.
```

### Constraints

- `1 <= s.length <= 500`
- `0 <= words.length <= 50`
- `1 <= words[i].length <= 10`
- `s` and every `words[i]` consist only of lowercase English letters.

## Hints

### Hint 1

Separate the two concerns. First compute a boolean array `covered` where
`covered[i]` records whether character `i` of `s` is covered by any keyword
occurrence, checking each keyword against every starting position. Then make
a single left-to-right pass over `covered` to emit tags: open `<b>` wherever a
covered run begins and close `</b>` wherever it ends.
