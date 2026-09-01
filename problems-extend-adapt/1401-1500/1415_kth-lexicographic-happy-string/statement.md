# Kth Lexicographic Happy String

## Description

Call a string happy when it is built only from the letters `'a'`,
`'b'`, and `'c'` and never repeats a letter in adjacent positions —
`s[i] != s[i+1]` for every valid `i`. So `"abab"` and `"cacbc"` are
happy, while `"aab"` and `"bbc"` are not.

Every happy string of length `n`, sorted alphabetically, forms an
ordered list. Given `n` and `k`, return the string sitting at position
`k` (1-indexed) in that list. When the list holds fewer than `k`
strings, return the empty string.

### Example 1

```text
Input: n = 5, k = 17
Output: "babab"
```

### Example 2

```text
Input: n = 5, k = 60
Output: ""
Explanation: Length-5 happy strings number 48 in total, so position 60
does not exist.
```

### Example 3

```text
Input: n = 10, k = 300
Output: "acabcacacb"
```

### Constraints

- `1 <= n <= 10`
- `1 <= k <= 100`

## Hints

### Hint 1

You never need to build the whole list. There are `3 · 2^(n-1)` happy
strings of length `n` — three openers, then two continuations apiece —
so you can tell immediately whether `k` is in range.

### Hint 2

Divide and locate: the list falls into three alphabetical blocks by
first letter, each of size `2^(n-1)`, and `(k-1)` divided by that size
names the block. Fix that letter, shrink `k` by the blocks before it,
and repeat with half the block size for every remaining position.
