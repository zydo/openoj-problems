# Longest Window of At Most K Symbols

## Description

You are given a string `s` and an integer `k`. Find the longest contiguous
stretch of `s` in which no more than `k` distinct symbols appear, and
return its length.

### Example 1

```text
Input: s = "opoqr", k = 2
Output: 3
Explanation: The stretch "opo" uses only the symbols o and p. Every longer
stretch reaches the q, which would be a third symbol.
```

### Example 2

```text
Input: s = "aabb", k = 1
Output: 2
Explanation: With a single symbol allowed, the search collapses to the
longest one-symbol run; "aa" and "bb" both qualify.
```

### Example 3

```text
Input: s = "mississippi", k = 2
Output: 7
Explanation: The stretch from the second character to the eighth,
"ississi", alternates just i and s. No window of eight characters stays
within two symbols.
```

### Constraints

- `s` holds between `1` and `5 * 10⁴` characters.
- `k` is an integer from `0` to `50`.

## Hints

### Hint 1

Let a window grow while it stays within the symbol budget. A window that
is already over budget cannot be fixed by extending it, so one left end
that only ever moves forward is enough.

### Hint 2

For each symbol in the window, keep how many copies of it the window
holds: the number of tracked symbols is the distinct count, and a copy
count that falls to zero retires the symbol.

### Hint 3

After every rightward step — and the shrink it may force — the window is
the longest valid one ending at that position. Keep the widest width seen.
