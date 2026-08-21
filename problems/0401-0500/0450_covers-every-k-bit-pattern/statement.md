# Covers Every K-Bit Pattern

## Description

You are given a string `s` of zeroes and ones, and an integer `k`.

There are `2^k` different strings of `k` bits. Return `true` if every one of
them shows up somewhere in `s` as a stretch of consecutive characters;
otherwise return `false`.

### Example 1

```text
Input: s = "100110", k = 2
Output: true
Explanation: The four 2-bit patterns are 00, 01, 10 and 11, and s contains
them all: 10 up front, 00 and 01 in the middle, 11 near the end.
```

### Example 2

```text
Input: s = "0010111000", k = 3
Output: true
Explanation: Each of the eight 3-bit patterns — 000, 001, 010, 011, 100,
101, 110, 111 — appears as consecutive characters somewhere in s.
```

### Example 3

```text
Input: s = "1101011", k = 2
Output: false
Explanation: The pattern 00 never occurs: the zeroes in s are always
separated by ones.
```

### Constraints

- `1 <= s.length <= 5 * 10^5`
- Every character of `s` is `'0'` or `'1'`.
- `1 <= k <= 20`

## Hints

### Hint 1

Only the stretches of exactly `k` consecutive characters matter — slide a
window of that width across `s` and collect what it shows.

### Hint 2

You do not need to find each pattern's position. Counting distinct windows
settles it: `s` covers everything exactly when that count reaches `2^k`.

### Hint 3

Once the collected count hits `2^k` you may stop scanning — no later window
can add anything. Folding each window into a `k`-bit number avoids building
substring copies.
