# Smallest Covering Window

## Description

You are given two strings `s` and `t`. Find the shortest contiguous piece of
`s` that contains every character of `t`, duplicates counted: when `t` holds
two `b`s, the piece must hold two of them.

Return that piece. If no piece of `s` can cover `t`, return the empty string
`""`.

Each input is constructed so that the shortest covering piece is unique.

### Example 1

```text
Input: s = "BEFFCDEAAFBAD", t = "BFD"
Output: "FBAD"
Explanation: "FBAD" holds one B, one F and one D. Longer covers exist — the
prefix "BEFFCD" is one — but nothing shorter covers t.
```

### Example 2

```text
Input: s = "aA", t = "Aa"
Output: "aA"
Explanation: Letters are case-sensitive, so both characters are required and
the whole string is the only cover.
```

### Example 3

```text
Input: s = "zq", t = "zz"
Output: ""
Explanation: Two z characters are demanded while s holds one, so nothing
covers t.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `1 <= t.length <= 10⁵`
- `s` and `t` contain only English letters, upper and lower case

### Follow-up

Testing every substring for coverage costs quadratic time. Can you finish in
time linear in the two lengths?

## Hints

### Hint 1

A candidate piece is an interval of `s`, so its two ends are what you
control — and both can be made to move in one direction only.

### Hint 2

Extend the right end until the interval covers all of `t`.

### Hint 3

With coverage achieved, advance the left end as far as coverage survives:
characters present in surplus, or absent from `t` entirely, can be dropped.

### Hint 4

Once the left end cannot advance without losing coverage, record the piece,
step the left end past one required character, and resume extending the
right end.
