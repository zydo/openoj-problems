# Rewritable Substring

## Description

You are given strings `s` and `sub`, together with a list of character pairs
`mappings`. Each pair `mappings[i] = [old, new]` names one allowed rewrite:
an occurrence of `old` inside `sub` may be swapped out for `new`.

Every character of `sub` may take part in at most one rewrite — a character
that has already been rewritten is final, so the pairs never chain. Apply any
number of rewrites, possibly none, and decide whether the resulting string can
be made to appear as a substring of `s`. A substring is a contiguous,
non-empty run of characters inside a string. Return `true` when some choice of
rewrites lands `sub` inside `s`, and `false` otherwise.

### Example 1

```text
Input: s = "sc4tter", sub = "cat", mappings = [["a","4"]]
Output: true
Explanation: Rewriting the 'a' in sub gives "c4t", which occurs in s starting
at its second character, so we return true.
```

### Example 2

```text
Input: s = "harbor", sub = "boom", mappings = [["o","0"],["b","p"]]
Output: false
Explanation: The four reachable spellings "boom", "bo0m", "poom", and "po0m"
all fail to occur contiguously in s, so we return false.
```

### Example 3

```text
Input: s = "SunSet12Hill", sub = "hill", mappings = [["h","H"]]
Output: true
Explanation: Rewriting the leading 'h' as 'H' turns sub into "Hill", an exact
substring of s, so we return true.
```

### Constraints

- `1 <= sub.length <= s.length <= 5000`
- `0 <= mappings.length <= 1000`
- Every entry of `mappings` holds exactly two characters, and the two differ.
- `s` and `sub` contain only English letters in both cases and digits.
- Each mapping endpoint is an English letter or a digit.

## Hints

### Hint 1

Treat every starting position of `s` as a candidate landing spot for `sub`,
and test the whole alignment one column at a time.

### Hint 2

Build a lookup that answers, for a pair of characters, whether the first may
be rewritten into the second — an alignment succeeds exactly when every column
passes that lookup.
