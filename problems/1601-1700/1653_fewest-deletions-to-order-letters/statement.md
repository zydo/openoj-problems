# Fewest Deletions to Order the Letters

## Description

A string `s` is built from just two letters, `'a'` and `'b'`. Call it
**ordered** when no `'b'` ever appears earlier than a later `'a'` — that
is, there is no pair of positions `i < j` with `s[i] = 'b'` and
`s[j] = 'a'`. In other words, after removing some characters, whatever
survives must read as zero or more `'a'`s followed by zero or more
`'b'`s.

Deleting any characters is allowed. Return the smallest number of
deletions that leaves `s` ordered.

### Example 1

```text
Input: s = "abba"
Output: 1
Explanation: Removing the final 'a' leaves "abb", which is ordered. No
single other deletion works, and one deletion is clearly needed since
the string as given is not ordered.
```

### Example 2

```text
Input: s = "aabbbb"
Output: 0
Explanation: All 'a's already precede all 'b's, so nothing has to be
removed.
```

### Example 3

```text
Input: s = "bbbaaa"
Output: 3
Explanation: One full letter group has to go — either wipe out the three
leading 'b's or the three trailing 'a's. Two deletions cannot separate
the letters.
```

### Example 4

```text
Input: s = "baab"
Output: 1
Explanation: Dropping the very first character turns the string into
"aab", which is ordered.
```

### Constraints

- `1 <= s.length <= 10^5`
- Every character of `s` is `'a'` or `'b'`.

## Hints

### Hint 1

An ordered string has exactly one "seam": every kept `'a'` lies before
it and every kept `'b'` lies after it. The answer is the cheapest seam
over all possible seam positions, including before the first and after
the last character.

### Hint 2

Moving the seam one position to the right changes the cost by a fixed
amount that depends only on the character being crossed, so a single
left-to-right pass computes every seam's cost without any re-scanning.
