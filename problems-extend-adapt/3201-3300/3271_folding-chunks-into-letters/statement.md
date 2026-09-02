# Folding Chunks Into Letters

## Description

A string `s` of length `n` and an integer `k` are given, with `n` always
a multiple of `k`. Cut `s` into consecutive chunks of exactly `k`
characters and fold each chunk, left to right, into a single letter:
number the alphabet from 0 (`'a'`) through 25 (`'z'`), add up the
numbers of the chunk's characters, and the letter sitting at that total
modulo 26 becomes the chunk's contribution. Joining the `n / k`
contributions in order gives the answer string.

### Example 1

```text
Input: s = "hello", k = 5
Output: "v"
Explanation: The only chunk is "hello"; its letters number 7, 4, 11,
11, 14, which sum to 47, and 47 % 26 = 21, the position of 'v'.
```

### Example 2

```text
Input: s = "abcabc", k = 3
Output: "dd"
Explanation: Each chunk "abc" sums to 0 + 1 + 2 = 3, which lands on 'd'
twice.
```

### Example 3

```text
Input: s = "pqrs", k = 2
Output: "fj"
Explanation: "pq" sums to 31, folding to 'f'; "rs" sums to 35, folding
to 'j'.
```

### Constraints

- `1 <= k <= 100`
- `k <= s.length <= 1000`
- `s.length` is a multiple of `k`.
- `s` contains only lowercase English letters.

## Hints

### Hint 1

The chunk boundaries are already fixed: chunk `i` is the window
`s[i*k .. (i+1)*k)`.

### Hint 2

Per chunk, one pass adds `ord(c) - ord('a')` for every character.

### Hint 3

Append `chr(ord('a') + total % 26)` for each chunk and concatenate.
