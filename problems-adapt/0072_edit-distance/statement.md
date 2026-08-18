# Edit Distance

## Description

Given two lowercase strings `source` and `target`, return the least number of
single-character operations that turn `source` into `target`. Three operations
are allowed, each costing one:

- insert a character anywhere,
- delete a character,
- replace one character with another.

The answer is the length of the cheapest such sequence, not a particular
sequence itself.

### Example 1

```text
Input: source = "brisk", target = "click"
Output: 3
Explanation: Replace b with c, r with l, and s with c. The i and the k already
agree, so no operation touches them.
```

### Example 2

```text
Input: source = "packet", target = "pocket"
Output: 1
Explanation: The strings differ in exactly one position, and one replacement
fixes it.
```

### Example 3

```text
Input: source = "", target = "grain"
Output: 5
Explanation: From an empty string the only move is insertion, so every
character of the target costs one operation.
```

### Constraints

- `0 <= source.length, target.length <= 500`
- `source` and `target` consist of lowercase English letters.

## Hints

### Hint 1

Ask the question about prefixes: how many operations turn the first `i`
characters of `source` into the first `j` of `target`? The full answer is the
case `i`, `j` at the ends.

### Hint 2

Look at the last characters of those prefixes. When they agree, the pair can
be aligned for free and the cost is whatever the shorter prefixes cost. When
they disagree, some final operation must touch one or both ends — say which
operation, pay one, and inherit the prefix pair that operation leaves behind.

### Hint 3

Building one prefix from nothing costs its length in insertions; reducing one
to nothing costs its length in deletions. Those are the edges of the table.

### Hint 4

Row `i` of the table reads only row `i - 1` and one cell to its own left, so
two rows carry the whole computation.
