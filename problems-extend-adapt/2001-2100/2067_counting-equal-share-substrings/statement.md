# Counting Equal-Share Substrings

## Description

You are given a string `s` of lowercase English letters and an integer
`count`. A substring of `s` — a contiguous, non-empty stretch of its
characters — has an equal share when every distinct letter it contains
occurs exactly `count` times. Call such a substring an equal-share
substring.

Return how many equal-share substrings `s` contains.

### Example 1

```text
Input: s = "zzbbxqq", count = 2
Output: 4
Explanation:
The qualifying stretches are "zz", "bb", the combined "zzbb", and the
closing "qq" — in each, every letter present shows up exactly twice.
```

### Example 2

```text
Input: s = "dedede", count = 3
Output: 1
Explanation:
Only the full string works: both `d` and `e` appear exactly 3 times there,
and no shorter stretch gets either letter up to 3.
```

### Example 3

```text
Input: s = "abc", count = 1
Output: 6
Explanation:
With `count = 1`, any stretch of unrepeated letters qualifies. All six
non-empty substrings of "abc" — "a", "b", "c", "ab", "bc", and "abc" —
have that property.
```

### Constraints

- `1 <= s.length <= 3 * 10⁴`
- `1 <= count <= 3 * 10⁴`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

Testing every substring independently is doomed at this size. What must
any valid substring's length look like?

### Hint 2

Each distinct letter in an equal-share substring occurs exactly `count`
times, so a substring holding `d` distinct letters has length exactly
`d * count`.

### Hint 3

Every valid length is therefore a multiple of `count` — and there are at
most 26 distinct letters to consider.

### Hint 4

For each candidate `d`, slide a fixed-size window of length `d * count`
over `s` while maintaining letter frequencies, and keep the counters you
need to test validity in constant time.
