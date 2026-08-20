# Longest Uniform Run After One Swap

## Description

You are given a string `text` made of lowercase letters. You may carry out
**at most one** swap: choose two positions and exchange the characters
stored there.

After the swap (or with no swap at all), consider the longest run of
identical consecutive characters the string contains. Return its length.

### Example 1

```text
Input: text = "aabaaca"
Output: 5
Explanation: The single c at position 5 can be swapped for the a at the end,
giving "aabaaaa" — the two a-runs join into a run of five.
```

### Example 2

```text
Input: text = "bbbbc"
Output: 4
Explanation: The run of four b's cannot grow: no fifth b exists anywhere to
swap in, so the best run has length 4.
```

### Example 3

```text
Input: text = "hhhhh"
Output: 5
Explanation: The string is one uniform run already; spending the swap is
unnecessary.
```

### Constraints

- `1 <= text.length <= 2 * 10⁴`
- `text` contains only lowercase English letters.

## Hints

### Hint 1

A single swap changes at most two positions, so it can help a run in only
two ways: pull one matching character in from elsewhere to lengthen a run,
or bridge two runs of the same character that sit exactly one alien
character apart.

### Hint 2

Compress the string into runs — a character and its length — and keep a
count of how often each character occurs overall. Both candidate moves can
then be read off the run list without touching the string again.

### Hint 3

Both moves are capped by supply: lengthening a run by one needs a spare
matching character *outside* that run, and joining two runs around a
one-character gap gains an extra character only if a third copy of the
character lives beyond those two runs.
