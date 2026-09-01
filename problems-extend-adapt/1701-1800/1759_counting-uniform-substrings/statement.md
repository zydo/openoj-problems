# Counting Uniform Substrings

## Description

Call a substring of `s` uniform when every character it contains is the
same letter. Count the uniform substrings of `s`, treating two of them
as different whenever they occupy different positions, even if they
spell identical text. The total can be enormous, so report it modulo
`10^9 + 7`.

### Example 1

```text
Input: s = "baaaab"
Output: 12
Explanation: The lone `b` at each end is itself one uniform substring.
The stretch of four `a`s contributes "a" (four placements), "aa"
(three), "aaa" (two), and "aaaa" (one) — ten more. The count is
1 + 10 + 1 = 12.
```

### Example 2

```text
Input: s = "gghhigg"
Output: 10
Explanation: The maximal blocks of one repeated letter are "gg", "hh",
"i", "gg" with lengths 2, 2, 1, 2, contributing 3 + 3 + 1 + 3 = 10.
```

### Example 3

```text
Input: s = "xyz"
Output: 3
Explanation: No letter repeats its neighbour, so only the three
single-letter substrings qualify.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` is made up of lowercase English letters.

## Hints

### Hint 1

Scan the string once and track how far the current run of identical
letters extends. The number of uniform substrings that end at a given
position equals that run length, so every step adds a known amount to
the tally.

### Hint 2

Equivalently, a maximal block of one repeated letter with length `k`
holds `k * (k + 1) / 2` uniform substrings — sum that over all blocks
and reduce the total modulo `10^9 + 7`.
