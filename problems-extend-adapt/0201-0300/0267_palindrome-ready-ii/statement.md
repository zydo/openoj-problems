# Palindrome Ready II

## Description

You are given a string `s` of lowercase English letters. Find every
distinct palindrome that can be formed by rearranging the letters of `s`.

Return the palindromes as a list sorted in ascending lexicographic order.
If no rearrangement of `s` is a palindrome, return an empty list.

### Example 1

```text
Input: s = "aabbcc"
Output: ["abccba","acbbca","baccab","bcaacb","cabbac","cbaabc"]
```

### Example 2

```text
Input: s = "xyz"
Output: []
```

### Constraints

- `1 <= s.length <= 16`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

When a palindromic rearrangement exists, focus on constructing only its
first half — the rest of the string is forced to mirror it (plus, for odd
lengths, one middle letter).

### Hint 2

Building all the distinct first halves is the same sub-problem as listing
the unique permutations of a multiset of letters.
