# Priciest Slice

## Description

You are given a string `s`, a string `chars` of distinct letters, and an
integer array `vals` of the same length as `chars`. Every letter carries a
value:

- A letter listed in `chars` is worth the `vals[i]` paired with it, where
  `i` is its position in `chars`.
- Any other letter is worth its 1-indexed spot in the alphabet: `'a'` is
  worth 1, `'b'` is worth 2, and so on up to `'z'`, worth 26.

The value of a slice of `s` — any contiguous run of its characters — is
the total value of those letters; the empty slice is defined to be worth 0.

Return the greatest value achieved by any slice of `s`.

### Example 1

```text
Input: s = "bca", chars = "b", vals = [-2]
Output: 4
Explanation: Here b is worth -2, while c and a keep their alphabet values
3 and 1. The slice "ca" totals 3 + 1 = 4, and no slice beats it.
```

### Example 2

```text
Input: s = "opq", chars = "p", vals = [-10]
Output: 22
Explanation: The letters o and q are worth 15 and 17, while p is worth
-10. Taking the whole string nets 15 - 10 + 17 = 22, the best possible.
```

### Example 3

```text
Input: s = "ab", chars = "ab", vals = [-3,-4]
Output: 0
Explanation: Both letters are priced below zero, so every non-empty slice
loses value. The best choice is the empty slice, worth 0.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters.
- `1 <= chars.length <= 26`
- `chars` consists of distinct lowercase English letters.
- `vals.length == chars.length`
- `-1000 <= vals[i] <= 1000`

## Hints

### Hint 1

Price every letter of `s` up front: one pass over `chars` builds a
26-entry lookup, after which `s` becomes a plain integer array.

### Hint 2

The priciest slice of a valued array is a maximum-sum run — Kadane's
single scan finds it, as long as the running sum is allowed to restart at
zero, which is exactly what keeps the empty slice's value of 0 in play.
