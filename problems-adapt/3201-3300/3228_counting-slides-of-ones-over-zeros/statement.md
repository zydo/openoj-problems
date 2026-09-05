# Counting Slides Of Ones Over Zeros

## Description

A binary string `s` is given, made only of the characters `0` and `1`.

One move needs an index `i` with `i + 1 < s.length` whose character
`s[i]` is `1` while `s[i + 1]` is `0`. Taking that move sends the `1`
at `i` marching to the right — swapping with successive zeros — until
it hits another `1` or falls off the right end of the string. For
instance, sliding the `1` at index `1` of `"010010"` produces
`"000110"`.

Perform moves as many times as you can, choosing indices however you
like. Return the largest possible number of moves.

### Example 1

```text
Input: s = "110100"
Output: 5
Explanation: Always sliding the leftmost eligible 1 gives:
- i = 1, leaving s = "101100".
- i = 0, leaving s = "011100".
- i = 3, leaving s = "011001".
- i = 2, leaving s = "010011".
- i = 1, leaving s = "000111".
After that no 1 is followed by a 0, and five is the most any sequence
manages.
```

### Example 2

```text
Input: s = "111"
Output: 0
Explanation: With no zero anywhere, no 1 is ever followed by a 0, so
not a single move can be made.
```

### Example 3

```text
Input: s = "01010011"
Output: 3
Explanation: Three slides exist in all: the 1 at index 1 crosses the
lone zero at index 2, and each of the two 1s sitting left of the zero
pair at indices 4-5 — the ones that start at indices 1 and 3 — crosses
that pair once. Each 1 can cross each zero block at most once, so
three is the cap.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s[i]` is either `0` or `1`.

## Hints

### Hint 1

Always exercising the lowest eligible index never hurts — order does
not change how many slides exist, and this rule realizes every one of
them.

### Hint 2

Equivalently, walk the string once from left to right: each time a new
block of zeros opens right after a `1`, every `1` seen so far will
eventually cross that block exactly once.
