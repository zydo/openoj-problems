# Sorted Vowel Words

## Description

A word here is built only from the five lowercase vowels `'a'`, `'e'`,
`'i'`, `'o'`, `'u'`, and it is called _in alphabetical order_ when no
letter ever drops going left to right — each letter matches or follows
the one before it.

Given an integer `n`, count the words of exactly `n` letters that use
only vowels and are in alphabetical order.

### Example 1

```text
Input: n = 3
Output: 35
Explanation: The words run from "aaa" up to "uuu". Words like "eee" or
"aou" qualify, while "ea…" does not, because "e" sits after "a".
```

### Example 2

```text
Input: n = 4
Output: 70
Explanation: Repeating one vowel ("oooo") is allowed; mixing them is
fine as long as the letters never step backwards.
```

### Example 3

```text
Input: n = 50
Output: 316251
```

### Constraints

- `1 <= n <= 50`

## Hints

### Hint 1

When you place the next letter, the choices open to you are fixed by the
letter just placed — it must stay put or move forward.

### Hint 2

Tally words by their final letter: for each vowel `v`, how many ordered
words of length `n` finish with `v`?

### Hint 3

Every ordered word of length `n` ending in `v` comes from appending `v`
to some ordered word of length `n - 1` whose own last letter does not
come after `v`.
