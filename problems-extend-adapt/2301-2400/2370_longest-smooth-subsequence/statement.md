# Longest Smooth Subsequence

## Description

A subsequence of `s` is called smooth when each letter sits within `k`
positions of the one before it in the alphabet: reading the kept letters
left to right, every neighboring pair may differ by at most `k` — in
either direction. Given a string `s` of lowercase English letters and an
integer `k`, return the length of the longest smooth subsequence of `s`.

The alphabet position gap is measured on the ordinary (non-cyclic)
alphabet, so `'a'` and `'z'` are 25 apart, not 1.

### Example 1

```text
Input: s = "dcbaxy", k = 1
Output: 4
Explanation: Keeping "dcba" gives a subsequence whose letters each step
down exactly one position, so it is smooth and has length 4. Extending it
is impossible because `x` sits far from every letter before it.
```

### Example 2

```text
Input: s = "hfgeib", k = 2
Output: 4
Explanation: The kept letters "hfge" are smooth — the steps are 2, 1,
and 2, and one of them climbs rather than descends, which is allowed.
No smooth subsequence of `s` is longer.
```

### Example 3

```text
Input: s = "bbac", k = 0
Output: 2
Explanation: With `k = 0` only identical neighbors may be kept
consecutively, so the best pick is "bb".
```

### Constraints

- `1 <= s.length <= 10⁵`
- `0 <= k <= 25`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Track the best smooth subsequence per last letter rather than per
position — two candidates ending in the same letter are interchangeable
for everything that follows.

### Hint 2

When a new character of letter `c` arrives, the chain it extends can end
on any letter within `k` of `c`; that window never spans more than 51 of
the 26-letter alphabet, so each character is settled in constant time.
