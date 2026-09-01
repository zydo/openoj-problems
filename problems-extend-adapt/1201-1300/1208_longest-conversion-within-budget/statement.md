# Longest Conversion Within Budget

## Description

You are given two lowercase strings `s` and `t` of the same length. Turning
`s` into `t` position by position is priced per character: replacing `s[i]`
with `t[i]` costs `|s[i] - t[i]|`, the distance between the two character
codes. You may choose one contiguous stretch of positions and convert all of
it, provided the stretch's total cost stays within `maxCost`.

Return the length of the longest stretch you can afford to convert. If even
a single character costs more than the budget allows, return `0`.

### Example 1

```text
Input: s = "abcz", t = "abda", maxCost = 1
Output: 3
Explanation: The first three positions cost 0 + 0 + 1 = 1, so "abc"
converts within budget. The fourth position alone would cost 25.
```

### Example 2

```text
Input: s = "mnop", t = "ponm", maxCost = 2
Output: 2
Explanation: Converting "no" (or "on") costs 1 + 1 = 2. Every
three-position stretch costs 5, which busts the budget.
```

### Example 3

```text
Input: s = "xdxff", t = "xdyff", maxCost = 0
Output: 2
Explanation: Nothing may be paid for, so only positions where `s` and `t`
already agree count — the longest such run is "xd".
```

### Constraints

- `1 <= s.length <= 10⁵`
- `t.length == s.length`
- `0 <= maxCost <= 10⁶`
- `s` and `t` consist of only lowercase English letters.

## Hints

### Hint 1

The per-position costs never change — write the sequence `|s[i] - t[i]|`
down and work with that instead of the two strings.

### Hint 2

The answer is the longest run of consecutive positions whose cost sum stays
within `maxCost`; slide a window over the cost sequence, growing on the
right and shrinking on the left whenever the budget is exceeded.
