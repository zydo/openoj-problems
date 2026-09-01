# Flip Up To the First Mark

## Description

Think of the character `ch` as a mark somewhere inside the string
`word`. Reverse the stretch of `word` that starts at index `0` and runs
through the first place the mark appears, that position included; the
part after the mark keeps its original order. If the mark never occurs
in `word`, the string is left exactly as it is.

Return the string after this treatment.

### Example 1

```text
Input: word = "brushed", ch = "u"
Output: "urbshed"
Explanation: The first "u" sits at index 2. Flipping the stretch from
index 0 through 2 turns "bru" into "urb", leaving "urbshed".
```

### Example 2

```text
Input: word = "mimic", ch = "m"
Output: "mimic"
Explanation: The mark is at index 0, so the flipped stretch is the
single character "m", which reverses to itself.
```

### Example 3

```text
Input: word = "stone", ch = "e"
Output: "enots"
Explanation: The mark is the final character, so the whole word flips.
```

### Example 4

```text
Input: word = "harbor", ch = "x"
Output: "harbor"
Explanation: "x" never appears, so the word goes back unchanged.
```

### Constraints

- `1 <= word.length <= 250`
- `word` consists of lowercase English letters.
- `ch` is a lowercase English letter.

## Hints

### Hint 1

Everything hinges on one number: the index where `ch` first shows up.
A built-in substring search can locate it for you.

### Hint 2

When the mark is missing, hand back the input untouched. Otherwise walk
two indices inward from both ends of the stretch to swap characters in
place, and leave the tail alone.
