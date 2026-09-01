# Strip Conflicting Case Pairs

## Description

You are given a string `s` built from lower-case and upper-case English
letters. Call the string _settled_ when no two neighboring characters are
the same letter written in opposite cases — an `x` sitting next to an `X`
is a conflict, while `x` next to `y` or `Y` is not.

A conflicted string is repaired by deleting neighboring offenders two at
a time: pick any adjacent pair that clashes, remove both characters, and
repeat until no clash remains. Deleting a pair can bring fresh neighbors
together, and those may clash in turn.

Return the string that remains once it is settled. The outcome does not
depend on which clashing pair is removed first. A string with nothing
left in it counts as settled.

### Example 1

```text
Input: s = "aBbcDd"
Output: "ac"
Explanation: The neighboring 'B' and 'b' clash and are removed; the same
then happens to 'D' and 'd', leaving "ac".
```

### Example 2

```text
Input: s = "xXyYz"
Output: "z"
Explanation: Both mixed-case neighbors cancel: "xXyYz" -> "yYz" -> "z".
```

### Example 3

```text
Input: s = "Pq"
Output: "Pq"
Explanation: 'P' and 'q' are different letters, so nothing clashes and
the string is left alone.
```

### Constraints

- `1 <= s.length <= 100`
- `s` contains only lower-case and upper-case English letters.

## Hints

### Hint 1

The final string never depends on the order the clashing pairs are
removed in — deleting one pair only exposes a single new neighborhood to
check.

### Hint 2

Sweep left to right holding the characters kept so far on a stack. A
fresh character can clash with nothing except the stack's top, so
comparing against the top alone reproduces the whole repeated-deletion
process in one pass.
