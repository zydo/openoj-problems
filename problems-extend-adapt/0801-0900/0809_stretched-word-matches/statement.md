# Stretched Word Matches

## Description

For a string, call each maximal consecutive block of one repeated character a
**run**. A source word may be stretched by enlarging any of its runs, but an
enlarged run must end with at least three copies of its character. Runs cannot
be deleted, reordered, merged, or changed to a different character.

Given a target string `s` and an array `words`, return how many words can be
stretched until they equal `s`.

### Example 1

```text
Input: s = "aaabcccc", words = ["abc","aabcc","aaabcccc","abcccc","aabbcccc"]
Output: 4
Explanation: All except "aabbcccc" can be stretched to the target. Its
second run has two b's, but the target has only one b, so that run cannot be
made to match.
```

### Example 2

```text
Input: s = "abb", words = ["abb","ab","aabb"]
Output: 1
Explanation: The target's b run has length 2, so a shorter b run cannot be
expanded to it.
```

### Constraints

- `1 <= s.length, words.length <= 100`
- `1 <= words[i].length <= 100`
- `s` and `words[i]` contain only lowercase English letters.
