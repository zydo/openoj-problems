# Words After a Word Pair

## Description

You are given a `text` of lowercase words separated by single spaces,
plus two words `first` and `second`. Scan the text for every spot where
`second` follows `first` directly; whenever that word pair shows up,
record the word that comes immediately after it.

Return, in left-to-right order, every recorded follow-up word — one
entry per place the pair occurs, even when the same word follows it
each time. A pair ending at the text's last word has no follow-up and
contributes nothing.

### Example 1

```text
Input: text = "the quick brown fox the quick dog", first = "the",
second = "quick"
Output: ["brown","dog"]
Explanation: The pair "the quick" appears twice, once before "brown"
and once before "dog".
```

### Example 2

```text
Input: text = "rain rain go away rain rain", first = "rain",
second = "rain"
Output: ["go"]
Explanation: Only the very first "rain rain" has a word after it; the
last occurrence runs to the end of the text.
```

### Example 3

```text
Input: text = "bright lights big city", first = "big",
second = "bright"
Output: []
Explanation: The two words never appear next to each other in that
order, so no word follows the pair.
```

### Constraints

- `1 <= text.length <= 1000`
- `text` consists of lowercase English letters and spaces.
- Words in `text` are separated by exactly one space.
- `1 <= first.length, second.length <= 10`
- `first` and `second` consist of lowercase English letters.
- `text` has no leading or trailing spaces.

## Hints

### Hint 1

Chop the text into its word list first; the problem then becomes a
matter of scanning neighbors.

### Hint 2

Walk the list once: whenever position `i` holds `first` and position
`i + 1` holds `second`, the word at `i + 2` is a match — stopping two
positions short of the end keeps that lookup safe.
