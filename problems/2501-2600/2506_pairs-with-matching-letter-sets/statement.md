# Pairs With Matching Letter Sets

## Description

You are given a 0-indexed array of strings `words`. Call two words a match
when they are built from exactly the same set of letters — repetition and
order do not matter. So `"cbac"` and `"abc"` match, since both use exactly
the letters `a`, `b`, and `c`, while `"cabcba"` and `"abd"` do not, because
only the second contains `d`.

Count the pairs of indices `(i, j)` with `0 <= i < j < words.length` whose
words match, and return that count.

### Example 1

```text
Input: words = ["cab", "abc", "bca", "xy"]
Output: 3
Explanation: The first three words all draw from the letters a, b, and c,
so every pair among them matches: (0, 1), (0, 2), and (1, 2). The word "xy"
shares its letter set with nothing, so the total is 3.
```

### Example 2

```text
Input: words = ["zz", "z", "sz"]
Output: 1
Explanation: "zz" and "z" both use only the letter z, giving the single
matching pair (0, 1). "sz" additionally uses s, so it matches neither.
```

### Example 3

```text
Input: words = ["ab", "cd", "ef"]
Output: 0
Explanation: No two words share the same letter set, so no pair matches.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` consists of only lowercase English letters.

## Hints

### Hint 1

Reduce each word to something that ignores letter order and repetition —
what remains decides a match.

### Hint 2

One bit per letter packs any word's letter set into a single integer, and
equal integers mean equal sets.
