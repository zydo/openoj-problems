# Longest Back-to-Back Word Tiling

## Description

A string `word` is **k-tiled** in a string `sequence` when `word` written
`k` times in a row, with no overlaps and no gaps between the copies, shows
up as a contiguous piece of `sequence`. The tiling count of `word` in
`sequence` is the largest `k` for which `word` is k-tiled there — or `0`
when `word` never appears inside `sequence` at all.

Given the strings `sequence` and `word`, return the tiling count of `word`
in `sequence`.

### Example 1

```text
Input: sequence = "gogogo", word = "go"
Output: 3
Explanation: "gogogo" is itself a piece of "gogogo" — three copies of
"go" laid end to end.
```

### Example 2

```text
Input: sequence = "gogogo", word = "ogo"
Output: 1
Explanation: "ogo" appears once (starting at the second character), but
two copies in a row, "ogoogo", appear nowhere.
```

### Example 3

```text
Input: sequence = "aaaa", word = "aa"
Output: 2
Explanation: The copies must sit back to back, so the overlap of the two
occurrences of "aa" cannot be chained through; two copies fill "aaaa",
and a third copy would not fit.
```

### Constraints

- Both strings are between 1 and 100 characters long.
- `sequence` and `word` contain only lowercase English letters.

## Hints

### Hint 1

The length limits are small enough that trying every candidate repetition
count directly is a perfectly workable plan.

### Hint 2

Alternatively, sweep the start positions of `sequence` from right to left
while carrying, for each position, how many consecutive copies a tiling
beginning there would achieve.
