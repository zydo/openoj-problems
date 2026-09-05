# Count Palindrome Slices

## Description

A _slice_ of `s` is any run of consecutive characters taken from it. A slice is
a **palindrome** when reversing it leaves the text unchanged.

Return how many slices of `s` are palindromes. Slices are counted by where they
sit, not by how they read: two palindromes that spell the same thing at
different offsets are two separate slices, and every single character is a
palindrome of length one.

### Example 1

```text
Input: s = "noon"
Output: 6
Explanation: The four single letters, the middle "oo", and the whole word.
```

### Example 2

```text
Input: s = "level"
Output: 7
Explanation: Five single letters, plus "eve" and "level" itself.
```

### Example 3

```text
Input: s = "sky"
Output: 3
Explanation: No two characters agree anywhere, so only the single letters
qualify.
```

### Constraints

- `1 <= s.length <= 1000`
- every character of `s` is a lowercase English letter

## Hints

### Hint 1

Reversing each of the roughly `n²/2` slices to test it runs to `O(n³)`, which
is too slow at the upper bound — and it is wasteful, because a slice and the
slice one character wider on each side share nearly all of their comparisons.

### Hint 2

Every palindrome has a middle. When its length is odd the middle is one
character; when the length is even it is the seam between two neighbours. That
gives only `2n - 1` possible middles for the whole string.

### Hint 3

Fix a middle and push outward one step at a time, comparing just the two
characters that entered the window on this step. Each step that matches is one
more palindrome. The first mismatch ends that middle for good, since every
wider slice around it still contains the pair that failed.
