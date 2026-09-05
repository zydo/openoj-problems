# Uniform-Count Substrings

## Description

You are handed a string word and an integer k. A substring s of word
earns the label uniform-count when:

- Every character that appears in s appears exactly k times.
- Any two side-by-side characters stay close in the alphabet: for
  adjacent characters c1 and c2, the absolute difference between their
  alphabet positions is at most 2.

Count the uniform-count substrings of word. A substring is a non-empty
contiguous run of characters from word.

### Example 1

```text
Input: word = "abc", k = 1
Output: 6
Explanation: Every substring makes the cut. Each of "a", "b", and "c"
has its single letter appearing exactly once, and the runs "ab", "bc",
and "abc" keep one occurrence per letter with neighbors never more than
1 apart in the alphabet.
```

### Example 2

```text
Input: word = "aabb", k = 2
Output: 3
Explanation: "aa", "bb", and "aabb" all give every letter they contain
exactly two occurrences (adjacent letters match, so the alphabet rule
holds too). Candidates like "ab" fail with only one occurrence of each
letter.
```

### Example 3

```text
Input: word = "azaza", k = 2
Output: 0
Explanation: The letters 'a' and 'z' sit 25 positions apart, so no
substring longer than a single character stays inside the adjacency
limit — and one lone character can never reach a count of 2.
```

### Constraints

- `1 <= word.length <= 10⁵`
- `word` consists only of lowercase English letters.
- `1 <= k <= word.length`

## Hints

### Hint 1

The alphabet rule splits word into maximal runs where every neighboring
pair differs by at most 2, and no qualifying substring crosses a run
boundary.

### Hint 2

A window using m distinct letters must have length exactly m * k, so at
most 26 window lengths per run are worth trying.

### Hint 3

Slide a fixed-size window across the run while tracking letter counts
and how many letters currently violate the "0 or exactly k" rule; the
window counts when that violation counter is zero.
