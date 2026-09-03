# Shaving Off Balanced Pieces

## Description

You are given a string `s` built only from the letters `'a'` and `'b'`.

One operation picks any substring of `s` in which the two letters occur
equally often and deletes it; whatever survives is joined back together
with no gap. Operations may be repeated as many times as you like, each
time choosing any balanced piece of the current string.

Return the length of the shortest string any sequence of operations can
leave behind.

### Example 1

```text
Input: s = "abab"
Output: 0
Explanation: The whole string holds two 'a' and two 'b', so "abab" is
itself a balanced piece and vanishes in a single operation.
```

### Example 2

```text
Input: s = "aabba"
Output: 1
Explanation: Delete the balanced piece "ab" made of the second a and
the first b, leaving "aba"; delete the "ab" inside that, and only "a"
remains. No balanced piece is left, so the answer is 1.
```

### Example 3

```text
Input: s = "bbbbba"
Output: 4
Explanation: The string holds five b's but a single a, and every
operation consumes the two letters in equal numbers. That lone a can
absorb at most one b, so four b's are stuck forever.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s[i]` is either `'a'` or `'b'`.

## Hints

### Hint 1

No matter how large the deleted piece is, an operation removes exactly
as many `'a'`s as `'b'`s — so the difference between the two counts can
never change.

### Hint 2

The difference is also reachable: while both letters survive, some two
adjacent characters must differ, and that two-letter pair is itself a
balanced piece waiting to be shaved.

### Hint 3

Once no operation remains, the string is one single letter repeated, and
its length is exactly `abs(count_a - count_b)`.
