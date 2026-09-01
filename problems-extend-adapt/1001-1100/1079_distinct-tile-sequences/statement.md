# Distinct Tile Sequences

## Description

You are handed `n` lettered tiles, where tile `i` is stamped with the
single uppercase letter `tiles[i]`. You may lay out any selection of
those tiles in a row, in any order, to spell a sequence of letters.

Two sequences count as the same whenever they spell the identical
string — tiles bearing the same letter are interchangeable. Return how
many distinct non-empty letter sequences can be spelled this way.

### Example 1

```text
Input: tiles = "WYS"
Output: 15
Explanation: The 15 distinct sequences are "S", "SW", "SWY", "SY", "SYW", "W", "WS", "WSY", "WY", "WYS", "Y", "YS", "YSW", "YW", "YWS".
```

### Example 2

```text
Input: tiles = "DDCC"
Output: 18
Explanation: The four tiles carry only two distinct letters, and
swapping the two D tiles — or the two C tiles — produces a row that
reads the same, so such rearrangements add nothing new.
```

### Example 3

```text
Input: tiles = "Z"
Output: 1
Explanation: The only sequence that can be spelled is "Z".
```

### Constraints

- `1 <= tiles.length <= 7`
- `tiles` consists of uppercase English letters.

## Hints

### Hint 1

Tally how many tiles carry each letter and grow a sequence one letter
at a time: at each step pick a letter that still has a copy left and
consume it. Branching on letters instead of on tile positions means
interchangeable duplicates are explored only once, so no string is ever
counted twice.
