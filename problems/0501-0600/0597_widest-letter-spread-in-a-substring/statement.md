# Widest Letter Spread in a Substring

## Description

Call the **spread** of a string the biggest gap between the occurrence counts
of two of its letters — `count(a) - count(b)` maximized over every ordered
pair of letters that both occur in it. A string built from a single letter has
spread `0`.

Given a string `s` of lowercase English letters, return the largest spread
attainable by any substring of `s`.

A substring is a contiguous run of characters inside `s`.

### Example 1

```text
Input: s = "ooppooop"
Output: 3
Explanation: The substring "ooppooo" holds five o's against two p's, a gap of
3, and no substring of s separates two of its letters any further.
```

### Example 2

```text
Input: s = "tuwxyzq"
Output: 0
Explanation: Every letter occurs exactly once, so within any substring any two
letters' counts tie at 1 (or a letter with itself ties at its own count),
leaving a gap of 0 everywhere.
```

### Example 3

```text
Input: s = "edcaeed"
Output: 2
Explanation: Taking the first six letters, "edcaee", gives three e's against
one d — a gap of 2. The final d does not help any pair, so the whole string
does no better.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Suppose the alphabet had only two letters. What does the gap between their
counts look like as the substring slides along?

### Hint 2

Score one letter `+1`, the other `-1`, and the rest `0`. The gap becomes a
subarray sum — with one caveat about which substrings are legal.

### Hint 3

The two scored letters must both occur inside the substring for the pair to
count. Which classic subarray-sum technique can carry that side condition?

### Hint 4

Run the two-letter scan for every ordered pair of letters present in `s`, and
keep the best result across all pairs.
