# Longest Duplicate-Free Substring

## Description

You are given a string `s`. Return the length of the longest stretch of
consecutive positions in `s` in which no character appears twice.

The stretch must be contiguous: positions skipped in between do not belong
to it.

### Example 1

```text
Input: s = "kayakrace"
Output: 5
Explanation: The stretch "krace" has five distinct characters. The two
earlier copies of 'a' and 'k' cut every longer candidate short.
```

### Example 2

```text
Input: s = "oooxooo"
Output: 2
Explanation: One 'o' on each side of the 'x' is all that fits, as in "ox".
```

### Example 3

```text
Input: s = "ab1 ab2"
Output: 5
Explanation: The stretch "1 ab2" mixes a digit and a space with letters —
any printable character counts.
```

### Constraints

- `0 <= s.length <= 5 * 10⁴`
- Every character of `s` is an English letter, a digit, a punctuation mark,
  or a space.

## Hints

### Hint 1

Any candidate answer is a stretch of consecutive positions, so scanning left
to right you can grow one stretch and watch how large it gets. What is the
only event that stops the growth?

### Hint 2

When a character already inside the stretch reappears, only its earlier copy
has to go. Recording each character's most recent position tells you exactly
where the stretch may resume.

### Hint 3

A recorded position that lies before the current left edge is obsolete —
checking it against the edge keeps the stretch from shrinking when it does
not need to.
