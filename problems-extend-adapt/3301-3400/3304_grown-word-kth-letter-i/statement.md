# The Grown Word's K-th Letter I

## Description

A word game begins with Alice holding `word = "a"`. Bob keeps asking her
to grow it, and each round of growth takes the current word, replaces
every letter with its next letter in the English alphabet, and appends
that transformed copy to the end — so the word doubles in length.

Growing `"c"` this way yields `"cd"`, and growing `"zb"` yields `"zbac"`.

You are given a positive integer `k`. Once enough rounds have passed that
`word` contains at least `k` letters, report the letter sitting at
position `k`.

### Example 1

```text
Input: k = 3
Output: "b"
Explanation: Two rounds suffice: "a" first becomes "ab", and after the
next round the word reads "abbc", whose third letter is "b".
```

### Example 2

```text
Input: k = 6
Output: "c"
Explanation: One further round stretches the word to "abbcbccd", and its
sixth letter is "c".
```

### Example 3

```text
Input: k = 500
Output: "h"
Explanation: Nine rounds produce 512 letters, which is past 500, and
letters never move once written — so the 500th letter is already fixed.
```

### Constraints

- `1 <= k <= 500`

## Hints

### Hint 1

The bound on `k` is tiny. Build the word itself: keep appending the
shifted copy until the length reaches `k`.

### Hint 2

Each round doubles the length, so only a handful of rounds can ever be
needed before position `k` exists.
