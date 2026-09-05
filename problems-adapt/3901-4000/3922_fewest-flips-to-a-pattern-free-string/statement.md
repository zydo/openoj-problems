# Fewest Flips To A Pattern-Free String

## Description

A binary string is _pattern-free_ when neither `"011"` nor `"110"` can be
formed by deleting characters from it — neither order appears even as a
subsequence.

You are given a binary string `s`. In one move you may pick any single
character and flip it, turning a `'0'` into a `'1'` or the other way round.

Flip as few characters as possible so that `s` becomes pattern-free, and
return that minimum number of moves.

### Example 1

```text
Input: s = "1100"
Output: 1
Explanation: Flipping s[0] gives "0100", which is left with a single 1 and
therefore cannot contain "011" or "110" as a subsequence.
```

### Example 2

```text
Input: s = "111000"
Output: 2
Explanation: Two flips suffice: turn the second and third characters to 0,
leaving "100000", which holds no forbidden subsequence. One flip cannot
remove every "110" hiding in the leading run of ones.
```

### Example 3

```text
Input: s = "011"
Output: 1
Explanation: The string itself is the forbidden pattern. Flipping the last
character yields "010", which is pattern-free.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s[i]` is either `'0'` or `'1'`.
