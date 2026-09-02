# Fixable Palindrome IV

## Description

You are given a string `s`, indexed from 0, whose characters are all
lowercase English letters. One operation takes any single character and
replaces it with any other lowercase letter.

Decide whether `s` can be turned into a palindrome — a string reading
the same forward and backward — using exactly one or two operations.

### Example 1

```text
Input: s = "monsoon"
Output: true
Explanation: Two mirrored positions disagree: the outer pair (m, n) and
the inner pair (n, o). Change the trailing n to m, repairing the outer
pair, then spend the second operation making the inner pair match —
"monsnom" is a palindrome. Two operations suffice, so return true.
```

### Example 2

```text
Input: s = "level"
Output: true
Explanation: The string is already a palindrome, but one or two
operations must still be spent. Changing s[0] and s[4] to the same new
letter keeps it a palindrome, so two operations work and the answer is
true.
```

### Example 3

```text
Input: s = "abcdeff"
Output: false
Explanation: Three mirrored pairs disagree here: (a, f), (b, f), and
(c, e). Each needs its own change, so two operations cannot get there.
Return false.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` is made up only of lowercase English letters

## Hints

### Hint 1

Hold `s` up against its own reflection and count the mirrored pairs
whose two letters differ.

### Hint 2

A mismatched pair costs exactly one change to repair — rewrite either
member — and a spare change can always be burned harmlessly, so the
mismatch count alone decides the answer.

### Hint 3

Walk one index inward from each end, tallying the mismatches as you go,
and compare the final tally against two.
