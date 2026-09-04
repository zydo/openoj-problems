# Subsequences at a Shared Frequency

## Description

A subsequence is what you get by deleting some (or no) characters of a
string while leaving the survivors in their original order. Call such a
pick balanced when it is non-empty and every distinct letter it contains
occurs exactly as often as every other one.

Given a string `s`, count its balanced subsequences. The answer can be
enormous, so report it modulo 10⁹ + 7.

### Example 1

```text
Input: s = "abab"
Output: 11
Explanation: Both letters occur twice. Picks that take each letter at
most once contribute 3 * 3 - 1 = 8, and taking both copies of each
letter contributes 2 * 2 - 1 = 3 more, for a total of 11.
```

### Example 2

```text
Input: s = "mississippi"
Output: 273
Explanation: The letters m, i, s, p occur 1, 4, 4, and 2 times; grouped
by the count they share, the picks contribute 149 + 97 + 24 + 3 = 273.
```

### Example 3

```text
Input: s = "code"
Output: 15
Explanation: Every letter is distinct, so any non-empty pick is
automatically balanced: 2⁴ - 1 = 15.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Tally how often each of the 26 letters appears; only the non-zero
tallies matter afterwards.

### Hint 2

For a fixed shared count `m`, every present letter independently either
sits out or donates exactly `m` of its occurrences; binomial
coefficients count the donation choices, and the per-`m` total is a
product over letters.

### Hint 3

Binomial coefficients modulo the prime 10⁹ + 7 follow from factorials
paired with modular inverses, which Fermat's little theorem and fast
exponentiation provide.
