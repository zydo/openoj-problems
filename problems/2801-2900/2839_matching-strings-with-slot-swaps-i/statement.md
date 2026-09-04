# Matching Strings With Slot Swaps I

## Description

You are given two strings `s1` and `s2`, both of length 4 and built from
lowercase English letters.

One move picks either string, chooses two of its positions that sit
exactly 2 apart, and exchanges the letters on those positions. You may
apply moves any number of times, to either string.

Decide whether the two strings can be made identical, and return `true`
if they can and `false` otherwise.

### Example 1

```text
Input: s1 = "pqrs", s2 = "rqps"
Output: true
Explanation: Exchange the letters at positions 0 and 2 of s1: "pqrs"
turns into "rqps", which equals s2.
```

### Example 2

```text
Input: s1 = "pqrs", s2 = "rqpz"
Output: false
Explanation: Positions 1 and 3 hold q and s in s1 but q and z in s2.
No move ever exchanges letters between the two swap pairs, so the s can
never be turned into the z.
```

### Constraints

- `s1.length == s2.length == 4`
- `s1` and `s2` consist only of lowercase English letters.

## Hints

### Hint 1

The strings are tiny — even walking through every reachable arrangement
is cheap.

### Hint 2

A length-4 string admits only two swaps: the pair of positions 0 and 2,
and the pair of positions 1 and 3.
