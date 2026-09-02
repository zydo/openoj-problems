# Vowel Totals Over Every Span

## Description

You are given a string `word` made of lowercase English letters. Call any
contiguous, non-empty piece of `word` a span. Add up the number of vowels —
`'a'`, `'e'`, `'i'`, `'o'`, and `'u'` — appearing across every span, and
return that grand total.

As `word` grows, this total climbs quickly; in languages with fixed-width
integers it will not fit in a signed 32-bit value, so compute it in a wider
type.

### Example 1

```text
Input: word = "ear"
Output: 7
Explanation: The spans are "e", "ea", "ear", "a", "ar", and "r". Their
vowel counts are 1, 2, 2, 1, 1, and 0 respectively, which sum to 7.
```

### Example 2

```text
Input: word = "stone"
Output: 14
Explanation: Only the spans containing the `o` or the closing `e` carry
vowels; adding up those sightings gives 14.
```

### Example 3

```text
Input: word = "crypt"
Output: 0
Explanation: Not a single span contains a vowel, so the total is 0.
```

### Constraints

- `1 <= word.length <= 10⁵`
- `word` consists of lowercase English letters.

## Hints

### Hint 1

Enumerating every span is hopeless at this size. Turn the question around:
for one position of `word`, how many spans contain that position?

### Hint 2

A character at index `i` (0-based) sits inside `(i + 1) * (n - i)` spans,
where `n` is the length of `word`. Sum that product over vowel positions
only, in a 64-bit accumulator.
