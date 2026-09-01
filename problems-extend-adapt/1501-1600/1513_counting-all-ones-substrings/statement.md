# Counting All-Ones Substrings

## Description

A binary string `s` is given. Count the substrings of `s` whose every
character is `'1'`. The total can be enormous, so report it modulo
`10⁹ + 7`.

### Example 1

```text
Input: s = "110100111"
Output: 10
Explanation: The three blocks of consecutive 1s contribute 3, 1, and 6
substrings respectively — "11" gives "1", "1", "11"; the lone "1" gives
one; "111" gives "1", "1", "1", "11", "11", "111".
```

### Example 2

```text
Input: s = "1011101"
Output: 8
Explanation: The middle block "111" alone accounts for 6 substrings, and
the two isolated 1s add one each.
```

### Example 3

```text
Input: s = "0"
Output: 0
Explanation: With no 1s anywhere, no substring qualifies.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s[i]` is `'0'` or `'1'`.

## Hints

### Hint 1

Only blocks of consecutive 1s matter — an all-ones substring can never
cross a `0`. Handle each maximal block on its own.

### Hint 2

A block of length `n` holds `n * (n + 1) / 2` such substrings. A single
left-to-right sweep that keeps the length of the current block adds up
these triangular numbers as it goes.
