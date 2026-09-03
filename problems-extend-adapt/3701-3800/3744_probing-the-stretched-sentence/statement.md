# Probing The Stretched Sentence

## Description

You are given a string `s` made of one or more words separated by single
spaces, and every word consists of lowercase English letters.

Stretch `s` into a longer string `t` as follows: within each word, the
first letter is written once, the second letter twice, the third three
times, and so on, while each space carries over as exactly one
character. For example, stretching `"grow up"` produces
`t = "grrooowwww upp"`.

Given an integer `k` that names a valid slot of `t`, return the
character of `t` at index `k` (0-indexed).

### Example 1

```text
Input: s = "abc def", k = 6
Output: " "
Explanation: t = "abbccc deefff". The three letters of "abc" fill the
first six slots, so the very next slot is the carried-over space.
```

### Example 2

```text
Input: s = "abc def", k = 9
Output: "e"
Explanation: t = "abbccc deefff". Slot 7 holds the lone d, and slots 8
and 9 hold the two copies of e, so the answer is "e".
```

### Example 3

```text
Input: s = "a b c", k = 4
Output: "c"
Explanation: One-letter words stretch to themselves and spaces keep
their size, so t = "a b c" and t[4] = "c".
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters and spaces `' '`.
- `s` has no leading or trailing spaces.
- The words of `s` are separated by a single space.
- `0 <= k < t.length` — `k` always names a valid slot of `t`.

## Hints

### Hint 1

A word's letter at offset `i` (0-based) owns `i + 1` consecutive slots
of `t`, so every character of `s` has a block whose size follows
straight from its offset.

### Hint 2

Walk through `s` and subtract each character's block size from `k`; the
character you are standing on when `k` first goes negative is the owner
of slot `k`.

### Hint 3

Treat every space as a block of one and reset the offset counter when a
new word begins. The stretched string can span billions of characters,
so never materialize it.
