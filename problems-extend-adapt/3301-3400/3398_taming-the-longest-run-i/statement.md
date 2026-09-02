# Taming The Longest Run I

## Description

A run is a maximal stretch of one repeated character inside a binary string.
You are given a binary string `s` and an integer `numOps`. Up to `numOps`
times you may pick any position of `s` and flip that bit, changing a `'0'`
into a `'1'` or the other way round. Reshape `s` so that its longest run is
as short as possible, and return that shortest possible run length.

### Example 1

```text
Input: s = "110100111000", numOps = 0
Output: 3
Explanation: With no flips allowed the string keeps its shape, and its
longest runs are the "111" and "000" blocks, each of length 3.
```

### Example 2

```text
Input: s = "1101001110", numOps = 1
Output: 2
Explanation: Flipping the middle character of the "111" block turns s into
"1101001010", whose longest run is now a length-2 block such as "11".
```

### Example 3

```text
Input: s = "1111111", numOps = 2
Output: 2
Explanation: Two well-placed flips — for instance making s = "1101101" —
break the seven 1s into pieces no longer than 2, and one flip cannot manage
that.
```

### Example 4

```text
Input: s = "01", numOps = 0
Output: 1
Explanation: The string already alternates, so every run has length 1.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists only of `'0'` and `'1'`.
- `0 <= numOps <= s.length`

## Hints

### Hint 1

Allowing one more flip never forces a longer run, so the feasibility of a cap
is monotone — binary-search the longest run length you are willing to accept.

### Hint 2

For a cap of 2 or more, a block of length `L` needs `floor(L / (m + 1))`
interior flips, counted independently per block; a cap of exactly 1 instead
asks how close `s` is to one of the two fully alternating strings.
