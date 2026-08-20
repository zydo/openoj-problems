# Permutation Window Starts

## Description

Given lowercase strings `s` and `p`, find every index where a substring of
`s` begins that contains exactly the same multiset of letters as `p`.

Return those starting indices in any order.

### Example 1

```text
Input: s = "bacaacb", p = "aac"
Output: [1,2,3]
Explanation: The three matching windows are "aca", "caa", and "aac".
```

### Example 2

```text
Input: s = "zzxyyxz", p = "xyz"
Output: [1,4]
Explanation: "zxy" and "yxz" use one copy of each required letter.
```

### Constraints

- `1 <= s.length, p.length <= 3 * 10^4`
- Both strings contain only lowercase English letters.

## Hints

### Hint 1

Every candidate has fixed length `p.length`; compare letter frequencies rather
than the letter order.

### Hint 2

Slide one window across `s`, updating counts only for the entering and leaving
letters.

### Hint 3

Track how many frequency slots differ from the target so each window test is
constant time.
