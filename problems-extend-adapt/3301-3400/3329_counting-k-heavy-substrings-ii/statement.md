# Counting K-Heavy Substrings II

## Description

You are handed a string s and an integer k. Count the substrings of s
that contain at least one letter occurring k or more times, and return
that count. A substring is any contiguous run of characters taken from
s; two occurrences at different positions count separately even when
they spell the same word.

### Example 1

```text
Input: s = "abcca", k = 2
Output: 6
Explanation: The qualifying substrings are "cc", "abcc", "bcc", "cca",
"bcca", and "abcca" — each contains the letter 'c' at least twice.
```

### Example 2

```text
Input: s = "abab", k = 2
Output: 3
Explanation: "aba" and "abab" contain 'a' twice, and "bab" contains 'b'
twice; no other substring repeats a letter.
```

### Example 3

```text
Input: s = "xyz", k = 2
Output: 0
Explanation: No letter ever repeats, so nothing qualifies.
```

### Constraints

- `1 <= s.length <= 3 * 10⁵`
- `1 <= k <= s.length`
- `s is made up of lowercase English letters only.`

## Hints

### Hint 1

Once a window already qualifies, stretching it to the right keeps it
qualifying — validity never goes away as the window grows.

### Hint 2

Fix the left end and locate the smallest right end that works, either
with two pointers or with a binary search over the counts.
