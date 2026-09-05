# Mirror Letters in Place

## Description

A string `s` mixes English letters with printable non-letters such as digits
and punctuation. Reflect the letters — the first letter trades places with
the last, the second with the second-to-last, and so on inward — while every
character that is not an English letter keeps its exact position.

Return the resulting string.

### Example 1

```text
Input: s = "run,Forest,run!"
Output: "nur,tseroF,nur!"
Explanation: The letters spell "runForestrun" backwards, so "nur" lands at
both ends and "tseroF" in the middle; the commas and the exclamation mark
never leave their positions.
```

### Example 2

```text
Input: s = "MiXed-Case42Text"
Output: "txeTe-saCd42eXiM"
Explanation: Case travels with each letter and nothing but positions
changes; the hyphen and the digits stay put.
```

### Example 3

```text
Input: s = "*+,*+/"
Output: "*+,*+/"
Explanation: The string holds no letters at all, so it is returned
unchanged.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of characters whose ASCII codes fall between 33 and 122.
- `s` never contains the double-quote or backslash characters.

## Hints

### Hint 1

Two indices walking inward from the ends carry over from ordinary string
reversal — each one simply steps past whatever is not a letter, and the pair
swaps only when both sides sit on letters.
