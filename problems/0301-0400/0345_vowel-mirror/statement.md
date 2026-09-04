# Vowel Mirror

## Description

Rearrange a string by reversing the order of its vowels while leaving every
other character at its original index. Treat `a`, `e`, `i`, `o`, and `u` as
vowels in either letter case; `y` is not a vowel for this task.

### Example 1

```text
Input: s = "coordinate"
Output: "ceardinoto"
Explanation: Its vowels are `o`, `o`, `i`, `a`, `e`; placing them back in the
opposite order changes only those five positions.
```

### Example 2

```text
Input: s = "Algorithm"
Output: "ilgorAthm"
```

### Example 3

```text
Input: s = "bcd fgh"
Output: "bcd fgh"
Explanation: With no vowels to exchange, the string is unchanged.
```

### Constraints

- `s` has between `1` and `3 * 10⁵` characters, inclusive.
- Every character of `s` is printable ASCII.

## Hints

### Hint 1

Only vowel positions can change. Find the outermost two vowel positions that
have not yet been handled.

### Hint 2

Move one pointer from the left and one from the right. Skip non-vowels, swap
when both pointers find vowels, then continue inward.
