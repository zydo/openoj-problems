# Cut Into the Most Distinct Pieces

## Description

Take a string `s` and cut it into as many pieces as you can, subject to
two rules: the pieces, read left to right, must glue back together into
exactly `s`, and no two pieces may be identical — every piece in the cut
has to be distinct.

A piece is any contiguous run of characters of `s`. Return the largest
number of pieces such a cut can produce.

### Example 1

```text
Input: s = "orbitorbit"
Output: 7
Explanation: One optimal cut is ["o","r","b","i","t","or","bit"]. The
naive idea of cutting all ten letters into single characters fails,
because each of o, r, b, i, t would then show up twice, and pieces must
be distinct.
```

### Example 2

```text
Input: s = "mmnnmm"
Output: 4
Explanation: With only the letters m and n available, some pieces have to
grow beyond a single character to stay distinct. One optimal cut is
["m","mn","n","mm"].
```

### Example 3

```text
Input: s = "glyphs"
Output: 6
Explanation: All six letters are different, so every character can stand
as its own piece and the whole string splits completely.
```

### Constraints

- `1 <= s.length <= 16`
- `s` consists of lowercase English letters only.

## Hints

### Hint 1

Track the pieces already taken in a set so duplicates are rejected in
constant time.

### Hint 2

From each position, try every possible length for the next piece and
backtrack — undoing the choice — whenever a branch cannot beat the best
cut found so far.
