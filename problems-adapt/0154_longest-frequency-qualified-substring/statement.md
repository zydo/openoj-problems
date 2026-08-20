# Longest Frequency-Qualified Substring

## Description

A substring is frequency-qualified for `k` when every distinct letter it
contains occurs at least `k` times within that substring.

Given a lowercase string `s` and an integer `k`, return the maximum length of
a frequency-qualified substring. Return `0` when no nonempty substring
qualifies.

### Example 1

```text
Input: s = "bbbaaacccx", k = 3
Output: 9
Explanation: "bbbaaaccc" contains three copies of each of its letters.
```

### Example 2

```text
Input: s = "aabccddeee", k = 2
Output: 7
Explanation: "ccddeee" is the longest qualifying substring.
```

### Constraints

- `1 <= s.length <= 10^4`
- Every character in `s` is a lowercase English letter.
- `1 <= k <= 10^5`

## Hints

### Hint 1

Within any candidate region, a letter whose total frequency is below `k`
cannot occur in an accepted substring.

### Hint 2

Use every underrepresented letter as a boundary, then solve the pieces between
those boundaries independently.

### Hint 3

Each recursive level removes at least one of the 26 possible letters from its
child regions.
