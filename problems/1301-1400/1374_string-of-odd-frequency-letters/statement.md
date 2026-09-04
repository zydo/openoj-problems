# A String of Odd-Frequency Letters

## Description

Given an integer `n`, build any string of exactly `n` lowercase English
letters in which every letter that appears, appears an odd number of times.
When several answers qualify, any of them is a correct construction.

For grading, the expected outputs follow one fixed canonical recipe: when `n`
is odd, the answer is `n` copies of `'a'`; when `n` is even, it is `n - 1`
copies of `'a'` followed by a single `'b'`.

### Example 1

```text
Input: n = 1
Output: "a"
Explanation: A single letter trivially occurs once — an odd count.
```

### Example 2

```text
Input: n = 6
Output: "aaaaab"
Explanation: 'a' occurs five times and 'b' once; both counts are odd. Any
other qualifying string would be a valid build, but outputs are graded
against the canonical recipe above.
```

### Example 3

```text
Input: n = 500
Output: 499 'a' characters followed by one 'b'
Explanation: The even case: an odd-sized block of one letter plus a single
occurrence of a second.
```

### Constraints

- `1 <= n <= 500`

## Hints

### Hint 1

One letter repeated `n` times already works whenever `n` itself is odd.

### Hint 2

For even `n`, shave one copy off: `n - 1` is odd, and a lone second letter
absorbs the leftover slot.
