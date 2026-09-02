# Trim and Pad Until Equal

## Description

Two strings are given: an `initial` string and a `target` string. One
move either attaches a single character to either end of `initial`, or
erases the single character currently sitting at one of its ends.

Work out the fewest moves that turn `initial` into `target` exactly.

### Example 1

```text
Input: initial = "harbor", target = "arboreal"
Output: 4
Explanation: Erase the leading `h` so `initial` reads "arbor" — that
block occurs inside "arboreal" too — then append `e`, `a`, and `l` in
order. Four moves in total.
```

### Example 2

```text
Input: initial = "pqa", target = "apq"
Output: 2
Explanation: Drop the leading `a`, leaving "pq", then attach an `a` at
the front, producing "apq".
```

### Example 3

```text
Input: initial = "cat", target = "dog"
Output: 6
Explanation: The two strings share no letter at all, so every one of
the three letters of `initial` must be erased and all three letters of
`target` attached — six moves.
```

### Constraints

- `1 <= initial.length, target.length <= 1000`
- Both strings consist solely of lowercase English letters.
