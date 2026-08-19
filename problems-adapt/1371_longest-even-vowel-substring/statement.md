# Longest Even-Vowel Substring

## Description

You are given a string `s` of lowercase English letters. Find the longest
contiguous substring in which every vowel — `a`, `e`, `i`, `o`, `u` — occurs an
even number of times, and return its length. Zero occurrences counts as even;
letters that are not vowels impose no condition.

### Example 1

```text
Input: s = "lemonmelon"
Output: 10
Explanation: The whole string qualifies: "e" and "o" each appear twice, and
"a", "i", "u" do not appear at all.
```

### Example 2

```text
Input: s = "quietperiod"
Output: 7
Explanation: The substring "ietperi" has "i" twice and "e" twice, and no "o"
or "u" at all; no longer stretch of the string works.
```

### Example 3

```text
Input: s = "aeio"
Output: 0
Explanation: Every non-empty substring contains some vowel exactly once, so
the best qualifying substring is the empty one of length 0.
```

### Constraints

- `1 <= s.length <= 5 * 10^5`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Only the parity of each vowel count matters, and there are five vowels — one
bit per vowel turns the whole parity state into a single number.

### Hint 2

Record the parity state after each prefix. A stretch between two positions has
all vowel counts even exactly when the two surrounding prefix states match.

### Hint 3

For each state keep the earliest position it was seen at; the best stretch
ending at position `i` runs back to that first occurrence.
