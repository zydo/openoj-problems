# Sealed Letter Islands

## Description

You are given a string `s` of length `n` and an integer `k`. Decide whether
you can pick `k` disjoint sealed substrings of `s`.

A substring is sealed when both of these hold:

- Every character that occurs inside the substring never occurs anywhere
  else in `s`.
- The substring is a proper part of `s` — it is not all of `s`.

The chosen substrings must be pairwise disjoint: no two of them may share a
position. Return `true` when `k` such substrings can be picked, and `false`
otherwise.

### Example 1

```text
Input: s = "wxdewypqyw", k = 2
Output: true
Explanation: The substrings "d" and "pq" are both sealed: 'd' occurs only
at one spot of s, and 'p' and 'q' occur only next to each other. They are
disjoint, so picking two is possible.
```

### Example 2

```text
Input: s = "abab", k = 2
Output: false
Explanation: No sealed substring exists at all. Any part containing 'a'
would need to cover both ends of s, and any part starting at 'b' has an
'a' sitting to its left. Since not even one exists, two cannot be picked.
```

### Example 3

```text
Input: s = "zz", k = 0
Output: true
Explanation: Picking zero substrings is always allowed.
```

### Constraints

- `2 <= n == s.length <= 5 * 10⁴`
- `0 <= k <= 26`
- `s` consists of lowercase English letters only.

## Hints

### Hint 1

A sealed substring can only begin at the first occurrence of some letter and
end at the last occurrence of some letter, so there are at most 26 of each
to consider.

### Hint 2

For each letter's first occurrence, grow a window rightward until it holds
every occurrence of every letter it has picked up; if a letter inside the
window also occurs before the start, that start is hopeless.

### Hint 3

The windows that survive are the smallest sealed substrings, and any sealed
substring contains one of them — so the question becomes: how many disjoint
surviving windows can you take?
