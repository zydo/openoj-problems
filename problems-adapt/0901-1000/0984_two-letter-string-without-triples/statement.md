# Two-Letter String Without Triples

## Description

Build a string over the two letters `'a'` and `'b'`. Given the requested
counts `a` and `b`, the string must contain exactly `a` copies of `'a'` and
exactly `b` copies of `'b'` — so its length is `a + b` — and neither letter
may appear three times consecutively: `'aaa'` and `'bbb'` are both forbidden
substrings. Several strings can satisfy the conditions for the same pair of
counts, and a valid string is guaranteed to exist.

The judge compares one exact string, so the required construction is
pinned. Call `big` the letter that was requested more times — on equal
counts that is `'a'` — and `small` the other. The string is built in two
phases. In the first phase, as long as `small` has not run out and the
unplaced `big` letters strictly outnumber the unplaced `small` letters,
append two `big` letters followed by one `small` letter. In the second
phase, append the survivors: one `big` letter whenever any are left, then
one `small` letter whenever any are left, until both counts reach zero.

### Example 1

```text
Input: a = 3, b = 5
Output: "bbabbaba"
Explanation: 'b' is the big letter, 5 against 3, so two "bba" rounds bring
the counts down to 1 and 1; the closing phase then appends the last 'b' and
the last 'a'.
```

### Example 2

```text
Input: a = 5, b = 2
Output: "aabaaba"
Explanation: Two "aab" rounds consume four 'a' letters and both 'b'
letters, and the single leftover 'a' closes the string.
```

### Constraints

- `0 <= a, b <= 100`
- Every input honors the existence guarantee: when one of the two counts is
  `0`, the other is at most `2`; otherwise the larger count is at most
  twice the smaller plus `2`.
