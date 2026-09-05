# Culling The Overused Letters

## Description

You are given a string `s` of lowercase English letters and an integer `k`.

Tally how many times each letter occurs across the whole of `s`. Every
occurrence of a letter that shows up `k` or more times is struck from the
string, while every occurrence of a letter that occurs fewer than `k`
times survives. The survivors keep the order they started in — this is a
removal in place, not a rearrangement.

Return the string that remains. When no letter qualifies, return the
empty string.

### Example 1

```text
Input: s = "banana", k = 2
Output: "b"
Explanation: The letter 'a' occurs 3 times and 'n' occurs twice — both
reach the threshold, so all of their occurrences go. Only the single 'b'
is spared.
```

### Example 2

```text
Input: s = "mississippi", k = 5
Output: "mississippi"
Explanation: The busiest letters, 'i' and 's', occur 4 times each, below
the threshold of 5, so nothing is removed.
```

### Example 3

```text
Input: s = "aabb", k = 2
Output: ""
Explanation: Both letters occur exactly 2 times, meeting `k` rather than
staying below it, so the result is empty.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of lowercase English letters.
- `1 <= k <= s.length`

## Hints

### Hint 1

One pass can tally the 26 possible letters into counters; a second pass
can then rebuild the answer by appending only the characters whose letter's
counter stayed strictly under `k`.
