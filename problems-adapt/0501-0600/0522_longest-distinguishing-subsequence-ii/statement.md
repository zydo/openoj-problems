# Longest Distinguishing Subsequence II

## Description

You are given an array of strings `strs`. A string from the array is
a **distinguishing subsequence** of the whole array if it can be
formed by deleting characters from exactly one entry, and no other
entry can produce that same string the same way. Return the length of
the longest distinguishing subsequence found anywhere in `strs`, or
`-1` if none exists.

A subsequence of a string `s` is any string obtainable by deleting
zero or more characters from `s` without reordering what remains. For
instance, `"ace"` is a subsequence of `"abcde"`, and so are `"abcde"`
itself, `"bd"`, and the empty string.

### Example 1

```text
Input: strs = ["dog","doghouse","cat"]
Output: 8
```

### Example 2

```text
Input: strs = ["moo","moo","moo","m"]
Output: -1
```

### Constraints

- `2 <= strs.length <= 50`
- `1 <= strs[i].length <= 10`
- `strs[i]` consists only of lowercase English letters.
