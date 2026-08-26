# Minimum String Length After Balanced Removals

## Description

You are given a string `s` consisting only of the characters `'a'` and `'b'`.

In one operation you may pick any substring of `s` that is **balanced** — it
contains exactly as many `'a'` characters as `'b'` characters — and delete it.
The pieces to the left and to the right of the deleted part are then joined
together with no gap, forming the next string. The whole current string is a
substring of itself, so it may be deleted in a single operation whenever its
two letter counts match. Operations may be repeated any number of times; when
no balanced substring exists, nothing can be removed and the string keeps its
current length.

Return the minimum length the string can reach over all possible sequences of
operations.

### Example 1

```text
Input: s = "aabbab"
Output: 0
Explanation: The whole string holds three 'a' and three 'b', so it is itself
balanced. Deleting it in one operation leaves the empty string of length 0.
```

### Example 2

```text
Input: s = "aaaa"
Output: 4
Explanation: Every substring consists of 'a' characters alone, so no
substring ever has equal letter counts. Nothing can be removed and the
minimum length stays at the input length 4.
```

### Example 3

```text
Input: s = "aaabb"
Output: 1
Explanation: Delete the balanced substring "ab"; the remains concatenate
into "aab". Then delete the newly adjacent "ab", leaving "a". No further
removal is possible, so the minimum length is 1.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of the characters `'a'` and `'b'`.

## Hints

### Hint 1

Try removing a largest balanced substring first and look at what survives at
the end — what kind of material can never be deleted?

### Hint 2

Let `count_a` and `count_b` be the number of occurrences of each letter in
`s`. Every operation removes one occurrence of each — can the final length be
derived from these two counts alone?

### Hint 3

The answer is `abs(count_a - count_b)`.
