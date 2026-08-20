# Best Score Erasing Letter Pairs

## Description

You are given a string `s` of lowercase letters, together with two integers
`x` and `y`. As often as you like, you may erase from `s`:

- an adjacent pair `"ab"`, collecting `x` points, or
- an adjacent pair `"ba"`, collecting `y` points.

Erasing a pair splices the string back together, so fresh pairs can appear:
erasing the middle pair of `"aabb"` leaves `"ab"`, which is itself erasable.
Letters other than `a` and `b` never take part in a pair.

Return the largest number of points you can collect.

### Example 1

```text
Input: s = "aababbab", x = 4, y = 5
Output: 18
Explanation: One optimal sequence of erasures:
"aababbab" → erase "ba" (positions 2-3) → "aabbab", 5 points
"aabbab"   → erase "ba" (positions 3-4) → "aabb",   5 points
"aabb"     → erase "ab" → "ab", 4 points
"ab"       → erase "ab" → "",    4 points
Total: 5 + 5 + 4 + 4 = 18.
```

### Example 2

```text
Input: s = "abba", x = 1, y = 10
Output: 11
Explanation: Erase the "ba" on the right first — "abba" becomes "ab" for 10
points — then erase that "ab" for 1 more. Both pairs get collected.
```

### Example 3

```text
Input: s = "cbbaacb", x = 4, y = 5
Output: 10
Explanation: The two c's never pair with anything. Two "ba" erasures happen
around them for 5 + 5 = 10 points, and no "ab" ever forms.
```

### Constraints

- `1 <= s.length <= 10^5`
- `1 <= x, y <= 10^4`
- `s` holds lowercase English letters.

## Hints

### Hint 1

Commit to one pair type and erase every copy of it before touching the other.
Start with whichever of `x` and `y` is larger.

### Hint 2

A left-to-right scan with a stack clears one pair type completely: when the
incoming letter completes the pair with the stack top, pop and score;
otherwise push. Run that scan for the cheaper pair over whatever survives.
